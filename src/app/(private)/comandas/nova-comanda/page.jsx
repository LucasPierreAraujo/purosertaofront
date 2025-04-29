import Modal from "@/components/layout/modal";
import Image from "next/image";
import { useState } from "react";

export default function NovaComanda({ onClose }) {
  const [nome, setNome] = useState("");
  const [buscaProduto, setBuscaProduto] = useState("");
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Coca-Cola (lata)", quantidade: 1, valor: 6.0 },
    
  ]);

  const handleExcluir = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const total = produtos.reduce(
    (acc, produto) => acc + produto.valor * produto.quantidade,
    0
  );

  return (
    <Modal onClose={onClose}>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-3xl p-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome do CLiente"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border p-2 rounded-xl"
            />

            <div className="flex-1 flex justify-center">

            <select
              value={buscaProduto}
              onChange={(e) => setBuscaProduto(e.target.value)}
              className="border p-2 rounded-xl"
            >
              <option value="">Buscar Produto</option>
              {produtos.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.nome}
                </option>
              ))}
            </select>
            </div>
          </div>

          <div className="flex border-b">
            
            <div className="w-1/3 bg-gray-200 p-4 font-bold flex items-center justify-center">
              USUÁRIO
            </div>

            <div className="w-2/3 p-4">
              <div className="grid grid-cols-4 font-bold border-b pb-2">
                <span>Produto</span>
                <span>Quantidade</span>
                <span>Valor</span>
                <span>Ações</span>
              </div>

              {produtos.map((produto) => (
                <div
                  key={produto.id}
                  className="grid grid-cols-4 items-center py-2 gap-4"
                >
                  <span>{produto.nome}</span>
                  <span>{produto.quantidade}x</span>
                  <span>R$ {produto.valor.toFixed(2)}</span>
                  <button
                    onClick={() => handleExcluir(produto.id)}
                    className="text-red-500 hover:underline"
                  >
                    Excluir
                  </button>
                </div>
              ))}

              <div className="text-right font-bold mt-4">
                TOTAL: R$ {total.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="flex items-center px-4 py-2 rounded">
              <Image
                src={"/icons/voltar.png"}
                alt="voltar"
                width={20}
                height={20}
              />
              Voltar
            </button>
            
              <button className="px-6 py-2 rounded">Pagar</button>
              <button className="px-6 py-2 rounded">Abrir Comanda</button>
            
          </div>
        </div>
      </div>
    </Modal>
  );
}
