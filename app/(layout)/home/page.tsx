"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Conversa from "@/components/conversa";
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export default function Home() {
  const [clicou, setClicou] = useState(false);
  const [messages, setMessages] = useState<{ mensagens: { usuario: string, mensagem: string, data: string }[], usuarios: string[] }>({ mensagens: [], usuarios: [] });
  const [newMessage, setNewMessage] = useState("");
  const [scrollTrigger, setScrollTrigger] = useState(0);
  const [showCreate, setShowCreate] = useState(false);
  const [newSalaName, setNewSalaName] = useState("");

  interface Sala {
    _id: string;
    nome: string;
    mensagens: { mensagem: string }[];
  }

  const [salas, setSalas] = useState<Sala[]>([]);
  const [salaAtualId, setSalaAtualId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchSalas(token);
    }
  }, []);

  const fetchSalas = (token: string) => {
    fetch('https://chat-api-pi-hazel.vercel.app/salas', {
      headers: {
        'Authorization': token
      }
    })
      .then(response => response.json())
      .then(data => {
        setSalas(data);
      })
      .catch(error => console.error('Error fetching chat rooms:', error));
  };

  const fetchMessages = useCallback(() => {
    const token = localStorage.getItem('token');
    console.log('fetching messages');
    if (token && salaAtualId) {
      fetch(`https://chat-api-pi-hazel.vercel.app/mensagens/${salaAtualId}`, {
        mode: 'cors',
        headers: {
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
          setMessages(data);
          setScrollTrigger(prev => prev + 1);
        })
        .catch(error => console.error('Error fetching messages:', error));
    }
  }, [salaAtualId]);

  const handleCreateSala = async () => {
    const token = localStorage.getItem('token');
    if (token && newSalaName.trim() !== "") {
      try {
        const response = await fetch('https://chat-api-pi-hazel.vercel.app/salas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({
            nome: newSalaName,
            tipo: "publica",
            chave: ""
          })
        });
        if (response.ok) {
          setNewSalaName("");
          setShowCreate(false);
          fetchSalas(token);
        } else {
          console.error('Failed to create room');
        }
      } catch (error) {
        console.error('Error creating room:', error);
      }
    }
  };

  useEffect(() => {
    if (salaAtualId) {
      fetchMessages();
      const intervalId = setInterval(fetchMessages, 10000);
      return () => clearInterval(intervalId);
    }
  }, [salaAtualId, fetchMessages]);

  const handleSalaClick = (salaId: string) => {
    setClicou(true);
    setSalaAtualId(salaId);
    handleJoinRoom(salaId);
  };

  const handleJoinRoom = async (salaId: string) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('https://chat-api-pi-hazel.vercel.app/salas/entrar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({ salaId })
        });
        if (response.ok) {
          console.log('Successfully joined the room');
          // Additional logic after joining the room
        } else {
          console.error('Failed to join the room');
        }
      } catch (error) {
        console.error('Error joining the room:', error);
      }
    } else {
      console.error('No token found');
    }
  };

  const handleLeaveRoom = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('https://chat-api-pi-hazel.vercel.app/salas/sair', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({ salaId: salaAtualId })
        });
        if (response.ok) {
          console.log('Successfully left the room');
          // Additional logic after leaving the room
        } else {
          console.error('Failed to leave the room');
        }
      } catch (error) {
        console.error('Error leaving the room:', error);
      }
    }
  }

  const handleSendMessage = async () => {
    const token = localStorage.getItem('token');
    console.log('sending message');
    if (token && salaAtualId) {
      const response = await fetch('https://chat-api-pi-hazel.vercel.app/mensagens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          mensagem: newMessage,
          salaId: salaAtualId
        })
      });
      if (response.ok) {
        setNewMessage("");
        fetchMessages();
      } else {
        console.error('Failed to send message');
      }
    }
  };

  return (
    <div className="md:flex h-screen max-h-[88vh] gap-4">
      <section className="border-2 border-purple-700 rounded-lg md:w-96 mr-4 mb-4 bg-gray-800 shadow-lg transform transition-all hover:border-purple-500">
        <h2 className="p-4 font-bold text-2xl text-purple-400 border-b border-purple-700">Salas</h2>
        <div className="p-4">
          <Button onClick={() => setShowCreate(!showCreate)} className="mb-4 w-full">Criar Sala</Button>
          {showCreate && (
            <div className="flex mb-4">
              <Input
                type="text"
                placeholder="Nome da sala"
                value={newSalaName}
                onChange={(e) => setNewSalaName(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button onClick={handleCreateSala}>Enviar</Button>
            </div>
          )}
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-8rem)]">
          {salas.map((sala) => (
            <div
              key={sala._id}
              className={`p-4 flex rounded-lg hover:cursor-pointer transition-colors duration-200 
                ${salaAtualId === sala._id ? 'bg-purple-900/50' : 'hover:bg-gray-700'}`}
              onClick={() => handleSalaClick(sala._id)}
            >
              <div className="w-full">
                <p className="font-bold text-purple-300 mb-1">{sala.nome}</p>
                <p className="text-gray-400 text-sm truncate">
                  {sala.mensagens.length > 0 ? sala.mensagens[sala.mensagens.length - 1].mensagem : 'Sem mensagens'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="border-2 border-violet-700 rounded-lg md:w-3/4 bg-gray-800 shadow-lg flex flex-col">
        {clicou && (
          <div className="p-4 flex justify-between border-b border-violet-700 bg-gray-800">
            <div>
              <p className="font-bold text-violet-300">Usuários</p>
              <div className="flex flex-wrap gap-2">
                {messages.usuarios.length > 0 ? (
                  messages.usuarios.map((usuario, index) => (
                    <p key={index} className="text-purple-300 text-sm"> | {usuario}</p>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">Nenhum usuário online</p>
                )}
              </div>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
              onClick={() => { setClicou(false); handleLeaveRoom(); }}
            >
              <img src="x.svg" className="w-6 h-6 opacity-70 hover:opacity-100" alt="Fechar" />
            </button>
          </div>
        )}

        {clicou && (
          <>
            <Conversa mensagens={messages.mensagens} usuarios={messages.usuarios} scrollTrigger={scrollTrigger} />
            <div className="p-4 items-center flex">
              <Input
                type="text"
                className="flex-grow p-2 rounded-l-lg text-white focus:outline-none"
                placeholder="Escreva sua mensagem..."
                value={newMessage}
                onValueChange={setNewMessage}
              />
              <Button
                onClick={handleSendMessage}
                className="p-2 bg-purple-700 text-white rounded-r-lg hover:bg-purple-600"
              >
                Enviar
              </Button>
            </div>
          </>
        )}

        {!clicou && (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-lg">
              Selecione uma sala para iniciar a conversa
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
