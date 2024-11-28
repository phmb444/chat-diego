"use client";

import React, { useState, useEffect } from 'react';
import Conversa from "@/components/conversa";

export default function Home() {
  const [clicou, setClicou] = useState(false);
  const [messages, setMessages] = useState<{ mensagens: { usuario: string, mensagem: string, data: string }[], usuarios: string[] }>({ mensagens: [], usuarios: [] });

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
      fetch('https://chat-api-pi-hazel.vercel.app/salas', {
        headers: {
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSalas(data);
        })
        .catch(error => console.error('Error fetching chat rooms:', error));
    }
  }, []);

  useEffect(() => {
    if (salaAtualId) {
      const token = localStorage.getItem('token');
      const fetchMessages = () => {
        if (token) {
          fetch(`https://chat-api-pi-hazel.vercel.app/mensagens/${salaAtualId}`, {
            headers: {
              'Authorization': token
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setMessages(data);
            })
            .catch(error => console.error('Error fetching messages:', error));
        }
      };

      fetchMessages();
      const intervalId = setInterval(fetchMessages, 10000);

      return () => clearInterval(intervalId);
    }
  }, [salaAtualId]);

  const handleSalaClick = (salaId: string) => {
    setClicou(true);
    setSalaAtualId(salaId);
  };

  return (
    <div className="md:flex h-screen max-h-[88vh] gap-4">
      <section className="border-2 border-purple-700 rounded-lg md:w-96 mr-4 mb-4 bg-gray-800 shadow-lg transform transition-all hover:border-purple-500">
        <h2 className="p-4 font-bold text-2xl text-purple-400 border-b border-purple-700">Salas</h2>
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
                    <p key={index} className="text-purple-300 text-sm">{usuario}</p>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">Nenhum usuário online</p>
                )}
              </div>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
              onClick={() => setClicou(false)}
            >
              <img src="x.svg" className="w-6 h-6 opacity-70 hover:opacity-100" alt="Fechar" />
            </button>
          </div>
        )}

        {clicou ? (
          <Conversa mensagens={messages.mensagens} usuarios={messages.usuarios} />
        ) : (
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
