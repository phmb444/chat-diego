'use client';
import { useEffect, useRef, useState } from 'react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

export default function Conversa({ mensagens, usuarios, scrollTrigger }: { mensagens: { usuario: string, mensagem: string, data: string }[], usuarios: string[], scrollTrigger: any }) {
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const user = localStorage.getItem('usuario');
        setCurrentUser(user);
    }, []);

    useEffect(() => {
        if (messagesEndRef.current && messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            // Alternativamente, para scroll suave:
            // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollTrigger]);

    return (
        <div
            className="message-list overflow-y-auto h-full" // Ajuste a altura conforme necessário
            ref={messageListRef}
        >
            {mensagens.map((msg, index) => (
                <div key={index} className={`flex ${msg.usuario === currentUser ? 'justify-end' : ''}`}>
                    <div className={`rounded-lg shadow-md max-w-[70%] mt-4 p-4 
                        ${msg.usuario === currentUser 
                            ? 'bg-violet-500 text-white mr-4' 
                            : 'bg-gray-100 ml-4'}`}>
                        <div className="flex flex-col gap-1">
                            <span className={`text-sm font-semibold 
                                ${msg.usuario === currentUser 
                                    ? 'text-violet-100' 
                                    : 'text-violet-600'}`}>
                                {msg.usuario}
                            </span>
                            <p className="text-base text-black break-words">{msg.mensagem}</p>
                            <span className={`text-xs mt-2 
                                ${msg.usuario === currentUser 
                                    ? 'text-violet-200' 
                                    : 'text-gray-500'}`}>
                                {new Date(msg.data).toLocaleDateString('pt-BR')}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}
