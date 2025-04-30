"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/layout/modal";

export default function ModalQuantidade({ produto, onClose, onConfirmar }) {
  const [quantidade, setQuantidade] = useState(1);

  const handleConfirmar = () => {
    if (quantidade > 0) {
      onConfirmar(produto, quantidade); // Confirma a quantidade e chama a função
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{produto?.nome}</h2>
        <p className="mb-1">Quantidade</p>
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="border p-2 rounded w-full mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmar}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirmar
          </button>
        </div>
      </div>
    </Modal>
  );
}
