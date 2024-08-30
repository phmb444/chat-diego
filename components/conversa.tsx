'use client';

import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { msgDiego } from "@/app/(layout)/home/page";


export default function Conversa(msgUser:any) {
    console.log(msgUser)
    
    return (
        <ScrollShadow hideScrollBar className="text-black h-4/5">
            <div className="bg-violet-200 rounded-md h-10 content-center ml-4 w-fit">
                <p className="ml-4 mr-4">{msgDiego[0]}</p>
            </div>
            <div className="flex justify-end">
                <div className="bg-violet-400 rounded-md h-10 content-center mr-4 mt-4 w-fit justify-end ">
                    <p className="ml-4 mr-4">{msgUser.msgUser[0]}</p>
                </div>
            </div>
            <div className="bg-violet-200 rounded-md h-10 content-center ml-4 w-fit">
                <p className="ml-4 mr-4">{msgDiego[1]}</p>
            </div>
            <div className="bg-violet-200 rounded-md h-10 content-center ml-4 w-fit mt-4">
                <p className="ml-4 mr-4">{msgDiego[2]}</p>
            </div>
            <div className="flex justify-end">
                <div className="bg-violet-400 rounded-md h-10 content-center mr-4 mt-4 w-fit justify-end ">
                    <p className="ml-4 mr-4">{msgUser.msgUser[1]}</p>
                </div>
            </div>
            <div className="bg-violet-200 rounded-md h-fit content-center ml-4 w-fit mt-4 p-4">
                <img src="diegoCandido.jpg" className="w-64" alt="" />
            </div>
            {msgUser.msgUser[2] != null && (
                <div className="flex justify-end">
                <div className="bg-violet-400 rounded-md h-10 content-center mr-4 mt-4 w-fit justify-end ">
                    <p className="ml-4 mr-4">{msgUser.msgUser[2]}</p>
                </div>
            </div>
            )
            }
    
        </ScrollShadow>
    )
}
