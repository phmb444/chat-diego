'use client';
import { useEffect, useState } from 'react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

export default function Conversa({ mensagens, usuarios }: { mensagens: { usuario: string, mensagem: string, data: string }[], usuarios: string[] }) {
    const [currentUser, setCurrentUser] = useState<string | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('usuario');
        setCurrentUser(user);
    }, []);

    return (
        <ScrollShadow hideScrollBar className="text-black h-4/5">
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
                            <p className="text-base break-words">{msg.mensagem}</p>
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
        </ScrollShadow>
    );
}