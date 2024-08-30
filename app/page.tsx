"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/home";
    }, 2000);
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
      <Input
        type="password"
        label="senha"
        placeholder="Insira sua senha"
        className="mt-4 md:w-80 w-3/5"
      ></Input>
      <Button
        isLoading={loading}
        onClick={handleButtonClick}
        className="mt-4 md:w-80 w-3/5"
      >
        Entrar
      </Button>
    </div>
  );
}
