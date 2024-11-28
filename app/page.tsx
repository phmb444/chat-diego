"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleButtonClick = async () => {
    setLoading(true);
    const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
    const nick = inputElement?.value;
    console.log(nick);
    let response = await fetch("https://chat-api-pi-hazel.vercel.app/entrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nick }),
    });
    let data = await response.json();
    console.log(data);
    if (data.usuario && data.token) {
      localStorage.setItem("usuario", data.usuario);
      localStorage.setItem("token", data.token);
      router.push("/home");
    } else if (data.message === 'Já existe um registro com esses dados') {
      setError('Já existe um usuário com esse nome');
    } else {
      setError('Erro interno do servidor');
    }
    setLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center h-screen justify-center"
      style={{
        background: "linear-gradient(0deg, #5E3C7F, #9D6FCC, #5E3C7F)",
      }}
    >
      <img
        src="/logo.png"
        width={200}
        alt=""
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <h1 className="text-4xl text-white font-bold">CHAT DA INFO</h1>
      <Input
        type="text"
        label="nome"
        placeholder="Insira seu nome"
        className="mt-12 md:w-80 w-3/5"
      ></Input>
      <Button
        isLoading={loading}
        onClick={handleButtonClick}
        className="mt-4 md:w-80 w-3/5"
      >
        Entrar
      </Button>
      {error && <p className="text-red-500 mt-4">{error}</p>}

    </div>
  );
}
