"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import Conversa from "@/components/conversa";

import { ScrollShadow } from "@nextui-org/scroll-shadow";

var msgDiego = ['oie', 'tudo bem', 'já fez o trabalho do chat?', 'acho bom!'];


export default function Home() {
  const [clicou, setClicou] = useState(false);
  const [msgUser, setMsgUser] = useState(['Oie, tudo bem?', 'já sim, sor']);
  const [newMsg, setNewMsg] = useState('');
  return (
    <div className="md:flex h-screen">
      <section className="border-2 border-purple-700 rounded-lg md:w-96 md:pb-80 mr-12 mb-12 p-4 h-fit w-full md:h-3/4">
        <p className="p-4 font-bold text-xl">Salas</p>
        <div className="p-4 flex rounded-lg hover:cursor-pointer hover:bg-gray-600" onClick={() => setClicou(true)}>
          <img
            src="diegoCandido.jpg"
            className="w-1/4 rounded-lg mr-6"
            alt=""
          />
          <div >
            <p className="font-bold">Diego Candido</p>
            <p>{msgDiego[2]}</p>
          </div>
        </div>
      </section>
      <main className="border-2 border-violet-700 rounded-lg md:w-3/4 h-3/4 flex flex-col">
        {clicou && <div className="p-4 flex justify-between h-fit-content">
          <div className="flex">
            <img
              src="diegoCandido.jpg"
              className="h-12 rounded-lg mr-6 "
              alt=""
            />
            <div>
              <p className="font-bold">Diego Candido</p>
              <p>Online</p>
            </div>
          </div>
          <div className="justify-items-end h-8 rounded-lg hover:cursor-pointer hover:bg-red-500" onClick={() => setClicou(false)}>
            <img src="x.svg" className="w-8 h-8 p-1" alt="" />
          </div>
        </div>}

        {clicou ? (
          <Conversa msgUser = {msgUser}></Conversa>
        ) : (
          <p className="text-center flex items-center justify-center mt-8 h-4/5">Sem conversa selecionada</p>
        )}
        <div className="flex mt-6 h-1/5 justify-center">
          <div className="flex w-full mt-8 flex-wrap md:flex-nowrap gap-4 ml-4">
            <Input isDisabled={!clicou} value={newMsg} onValueChange={setNewMsg} type="Text" label="Envie uma mensagem..." />
          </div>
          <Button isDisabled={!clicou} onPress={() => setMsgUser(prevMsgUser => [...prevMsgUser, newMsg])} radius="full" className="mt-8 w-16 h-14 ml-4  mr-4 bg-violet-500" variant="shadow" isIconOnly color="secondary">
            <img src="paper-plane-right.svg" className="w-1/2" alt="" />
          </Button>
        </div>
      </main>
    </div>
  );
}
