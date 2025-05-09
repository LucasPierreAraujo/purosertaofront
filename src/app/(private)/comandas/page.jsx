"use client";

import { useState } from "react";
import ButtonNew from "@/components/ui/button-new";
import NovaComanda from "./nova-comanda/page";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idModal, setIdModal] = useState(null);

  return (
    <section className="bg-[#FFD6B9] min-h-screen px-8 py-6">
      <div className="max mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">COMANDAS</h3>
          <ButtonNew onClick={() => setIsModalOpen(true)}>
            <span className="font-bold ">NOVA COMANDA</span>
          </ButtonNew>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-center font-semibold mb-6 text-xl">ABERTAS</h2>
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => {
                setIdModal(2);
                setIsModalOpen(true);
              }}
              className="cursor-pointer w-44 h-28 bg-[#B4DEEA] px-6 py-4 rounded-xl font-bold text-base flex flex-col items-center justify-between shadow-md"
            >
              <p className="text-lg">LORENA</p>
              <p className="text-sm font-semibold">R$ 10,00</p>
            </button>
            <button className="cursor-pointer w-44 h-28 bg-[#B4DEEA] px-6 py-4 rounded-xl font-bold text-base flex flex-col items-center justify-between shadow-md">
              <p className="text-lg">LORENA</p>
              <p className="text-sm font-semibold">R$ 10,00</p>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-center font-semibold mb-6 text-xl">FECHADAS</h2>
          <div className="flex flex-wrap gap-6">
            <button className="cursor-pointer w-44 h-28 bg-[#808080] text-white px-6 py-4 rounded-xl font-bold text-base flex flex-col items-center justify-between shadow-md">
              <p className="text-lg">LORENA</p>
              <p className="text-sm font-semibold">R$ 10,00</p>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <NovaComanda
          onClose={() => {
            setIsModalOpen(false);
            setIdModal(null);
          }}
          id={idModal}
        />
      )}
    </section>
  );
}
