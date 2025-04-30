"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  const handleFecharCaixa = () => {
    router.push("/caixa/open"); // Altere para o caminho correto da sua rota
  };

  return (
    <section className="bg-[#FFD6B9] min-h-screen flex items-center justify-center">
      <div className="bg-white px-12 py-10 rounded-3xl shadow-md flex flex-col items-center gap-6">
        <h2 className="font-bold text-xl">Lucas</h2>
        <div className="flex justify-between w-full">
          <p>TEMPO ABERTO</p>
          <p>9H 25M</p>
        </div>
        <div className="flex justify-between w-full">
          <p>COMANDAS</p>
          <p>25</p>
        </div>
        <div className="flex justify-between w-full">
          <p>DINHEIRO</p>
          <p>R$ 1000,00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>PIX</p>
          <p>R$ 1000,00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>DÉBITO</p>
          <p>R$ 1000,00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>CRÉDITO</p>
          <p>R$ 1000,00</p>
        </div>
        <div className="flex justify-between w-full">
          <p>TOTAL</p>
          <p>R$ 4000,00</p>
        </div>
        <Button onClick={handleFecharCaixa}>
          <span className="flex items-center justify-center font-bold gap-4">
            FECHAR CAIXA
            <Image
              src={"/icons/CashRegister.png"}
              alt="register"
              width={24}
              height={24}
            />
          </span>
        </Button>
      </div>
    </section>
  );
}
