'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const handleLogout = async () => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      await fetch("https://chat-api-pi-hazel.vercel.app/sair", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nick: usuario }),
      });
    }
  };
  return (
    <NextUINavbar maxWidth="xl" className="h-[10vh]" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <div className="flex justify-center items-center gap-1">
            <a href="./" onClick={handleLogout} className="hover:translate-x-2 translate-x-[-12px] hover:mr-8 p-4">
              <img src="arrow-left.svg" alt="" />
            </a>
            <img src="/logo.png" width={80} alt="" style={{ filter: "hue-rotate(70deg)" }} />
            <h1 className="font-bold text-inehrit text-xl">CHAT DA INFO</h1>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
