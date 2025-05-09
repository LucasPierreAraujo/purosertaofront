"use client"; // necessário para usar hooks no componente

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { name: "CAIXA", path: "/caixa" },
    { name: "COMANDAS", path: "/comandas" },
    { name: "PRODUTOS", path: "/produtos" },
    { name: "FINANCEIRO", path: "/financeiro" },
    { name: "USUÁRIOS", path: "/usuarios" },
  ];

  return (
    <header className="flex justify-between items-center w-full bg-white sticky top-0 z-50 px-8 py-4">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={117}
          height={62}
        />
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`px-3 py-1 rounded-3xl font-medium ${
                  pathname === path ? "bg-[#ADD8E6] text-white" : "text-black hover:bg-blue-100"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
