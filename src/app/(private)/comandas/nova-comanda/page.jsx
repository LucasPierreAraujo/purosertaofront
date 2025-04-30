"use client";

import ModalComanda from "@/components/layout/modal-comanda";
import Image from "next/image";
import { useState } from "react";
import ModalQuantidade from "@/components/layout/modal-quantidade";

export default function NovaComanda({ onClose }) {
  const [nome, setNome] = useState("");
  const [buscaProduto, setBuscaProduto] = useState("");

  const [produtos, setProdutos] = useState([]); // Produtos na comanda

  const estoqueProdutos = [
    { id: 1, nome: "Coca-Cola (lata)", valor: 6.0 },
    { id: 2, nome: "Pepsi", valor: 5.5 },
    { id: 3, nome: "Fanta Uva", valor: 5.5 },
    { id: 4, nome: "Guaraná", valor: 5.0 },
  ];

  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleAbrirModalQuantidade = (produto) => {
    console.log(produto); // Verificar se o produto está correto
    setProdutoSelecionado(produto);
    setModalAberto(true);
  };

  const handleAdicionarProduto = (produto, quantidade) => {
    const produtoComQuantidade = {
      ...produto,
      quantidade,
    };
    setProdutos((prev) => [...prev, produtoComQuantidade]);
    setModalAberto(false);
    setProdutoSelecionado(null);
  };

  const handleExcluir = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  const total = produtos.reduce(
    (acc, produto) => acc + produto.valor * produto.quantidade,
    0
  );

  return (
    <>
      <ModalComanda onClose={onClose}>
        <div className="flex items-center w-full justify-center">
          <div className="rounded-lg w-full">
            <div className="bg-white w-full p-4 flex items-center gap-64 mb-4">
              <input
                type="text"
                placeholder="Nome do Cliente"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border p-2 rounded-xl"
              />

              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  placeholder="Buscar Produto"
                  value={buscaProduto}
                  onChange={(e) => setBuscaProduto(e.target.value)}
                  className="border p-2 rounded-xl w-full"
                />
                {buscaProduto && (
                  <ul className="absolute bg-white border rounded-xl w-full mt-1 max-h-48 overflow-y-auto z-10">
                    {estoqueProdutos
                      .filter((produto) =>
                        produto.nome
                          .toLowerCase()
                          .includes(buscaProduto.toLowerCase())
                      )
                      .map((produto) => (
                        <li
                          key={produto.id}
                          onClick={() => {
                            setBuscaProduto("");
                            handleAbrirModalQuantidade(produto);
                          }}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {produto.nome}
                        </li>
                      ))}
                    {estoqueProdutos.filter((produto) =>
                      produto.nome
                        .toLowerCase()
                        .includes(buscaProduto.toLowerCase())
                    ).length === 0 && (
                      <li className="p-2 text-gray-400">
                        Nenhum produto encontrado
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex">
              <div className="w-1/4 p-4 font-bold flex items-center justify-center border-b">
                USUÁRIO
              </div>
              <div className="pr-2 w-2/2">
                <div className="bg-white border-b p-4">
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
            </div>

            <div className="flex justify-between items-center">
              <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2 w-1/4">
                <Image
                  src={"/icons/voltar.png"}
                  alt="voltar"
                  width={20}
                  height={20}
                />
                Voltar
              </button>
              <div className="pr-2 pb-2 w-2/2">
                <div className="bg-white flex items-center justify-between rounded-b-3xl p-4">
                  <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                    <Image
                      src={"/icons/pagar.png"}
                      alt="pagar"
                      width={20}
                      height={20}
                    />
                    Pagamento
                  </button>
                  <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                    <Image
                      src={"/icons/check.svg"}
                      alt="check"
                      width={20}
                      height={20}
                    />
                    Abrir Comanda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalComanda>

      {modalAberto && produtoSelecionado && (
        <ModalQuantidade
          produto={produtoSelecionado}
          onClose={() => setModalAberto(false)}
          onConfirmar={handleAdicionarProduto}
        />
      )}
    </>
  );
}
