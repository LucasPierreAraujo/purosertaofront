"use client";

import ModalComanda from "@/components/layout/modal-comanda";
import Image from "next/image";
import { useState } from "react";

export default function NovaComanda({ onClose, id = null }) {
  const [nome, setNome] = useState("");
  const [buscaProduto, setBuscaProduto] = useState("");
  const [modalQuantidadeProduto, setModalQuantidadeProduto] = useState({
    produto: null,
    quantidade: 1,
  });
  const [modalExcluirProduto, setModalExcluirProduto] = useState({
    produto: null,
    quantidade: 1,
  });
  const [produtos, setProdutos] = useState([]);

  const estoqueProdutos = [
    { id: 1, nome: "Coca-Cola (lata)", valor: 6.0 },
    { id: 2, nome: "Pepsi", valor: 5.5 },
    { id: 3, nome: "Fanta Uva", valor: 5.5 },
    { id: 4, nome: "Guaraná", valor: 5.0 },
  ];

  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleAbrirModalQuantidade = (produto) => {
    setModalQuantidadeProduto({ produto, quantidade: 1 });
  };

  const handleAbrirModalExcluir = (produto) => {
    setModalExcluirProduto({ produto, quantidade: 1 });
  };

  const handleAdicionarProduto = (produto, quantidade) => {
    setProdutos((prevProdutos) => {
      const existente = prevProdutos.find((p) => p.id === produto.id);

      if (existente) {
        return prevProdutos.map((p) =>
          p.id === produto.id
            ? { ...p, quantidade: p.quantidade + quantidade }
            : p
        );
      } else {
        return [...prevProdutos, { ...produto, quantidade }];
      }
    });

    setModalQuantidadeProduto({ produto: null, quantidade: 1 });
  };

  const handleExcluirProduto = (produto, quantidade) => {
    setProdutos((prevProdutos) => {
      const novoProduto = prevProdutos.find((p) => p.id === produto.id);
      if (novoProduto && novoProduto.quantidade > quantidade) {
        return prevProdutos.map((p) =>
          p.id === produto.id
            ? { ...p, quantidade: p.quantidade - quantidade }
            : p
        );
      } else {
        return prevProdutos.filter((p) => p.id !== produto.id);
      }
    });
    setModalExcluirProduto({ produto: null, quantidade: 1 });
  };

  const total = produtos.reduce(
    (acc, produto) => acc + produto.valor * produto.quantidade,
    0
  );

  return (
    <>
      <ModalComanda onClose={onClose}>
        <div className="flex items-center w-full justify-center relative z-40">
          {modalQuantidadeProduto.produto && (
            <div className="absolute w-full h-full flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
              <div className="bg-white p-4 rounded-lg shadow-lg w-fit h-fit items-center justify-center flex flex-col">
                <h1 className="text-2xl font-bold">Adicionar Produto</h1>
                <p className="text-gray-500">Selecione a quantidade:</p>
                <input
                  onChange={(e) =>
                    setModalQuantidadeProduto((prev) => ({
                      ...prev,
                      quantidade: Number(e.target.value),
                    }))
                  }
                  className="p-2 border"
                  type="number"
                  placeholder="quantidade"
                />
                <div className="flex gap-2 items-center justify-center">
                  <button
                    onClick={() => {
                      setModalQuantidadeProduto({
                        produto: null,
                        quantidade: 0,
                      });
                    }}
                    className="font-semibold bg-red-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-red-600/80 cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      const quantidade = modalQuantidadeProduto.quantidade;
                      const produto = modalQuantidadeProduto.produto;
                      handleAdicionarProduto(produto, quantidade);
                      setModalQuantidadeProduto({
                        produto: null,
                        quantidade: 0,
                      });
                    }}
                    className="font-semibold bg-[#ADD8E6] text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-[#ADD8E6]/80 cursor-pointer"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          )}

          {modalExcluirProduto.produto && (
            <div className="absolute w-full h-full flex items-center justify-center rounded-lg bg-white/50 backdrop-blur-sm">
              <div className="bg-white p-4 rounded-lg shadow-lg w-fit h-fit items-center justify-center flex flex-col">
                <h1 className="text-2xl font-bold">Excluir Produto</h1>
                <p className="text-gray-500">
                  Selecione a quantidade a ser excluída:
                </p>
                <input
                  onChange={(e) =>
                    setModalExcluirProduto((prev) => ({
                      ...prev,
                      quantidade: Number(e.target.value),
                    }))
                  }
                  className="p-2 border"
                  type="number"
                  placeholder="quantidade"
                />
                <div className="flex gap-2 items-center justify-center">
                  <button
                    onClick={() => {
                      setModalExcluirProduto({ produto: null, quantidade: 0 });
                    }}
                    className="font-semibold bg-red-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-red-600/80 cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      const quantidade = modalExcluirProduto.quantidade;
                      const produto = modalExcluirProduto.produto;
                      handleExcluirProduto(produto, quantidade);
                    }}
                    className="font-semibold bg-[#ADD8E6] text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-[#ADD8E6]/80 cursor-pointer"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-lg w-full">
            <div className="bg-white w-full p-4 flex items-center gap-64 mb-4">
              {id ? (
                `Lorena`
              ) : (
                <input
                  type="text"
                  placeholder="Nome do Cliente"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="border p-2 rounded-xl"
                />
              )}

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
              <div className="w-1/4 p-4 font-bold flex flex-col items-center justify-between border-b">
                {id && (
                  <h1 className="inline-flex items-center justify-center rounded-3xl bg-green-500 px-4 py-2 text-white text-lg">
                    Aberto
                  </h1>
                )}
                <h1>{id ? `LUCAS` : `Usuário`}</h1>
                {id && (
                  <div>
                    <h3>Iniciado em: data</h3>
                    <h3>Às: Horas</h3>
                  </div>
                )}
                {id && (
                  <div>
                    <h3>Pago R$ valor</h3>
                    <h3>Falta pagar R$ valor</h3>
                  </div>
                )}
              </div>
              <div className="pr-2 w-2/2">
                <div className="bg-white border-b p-16">
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
                        onClick={() => handleAbrirModalExcluir(produto)}
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
                  {id ? (
                    <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                      <Image
                        src={"/icons/imprimir.png"}
                        alt="pagar"
                        width={20}
                        height={20}
                      />
                      Imprimir
                    </button>
                  ) : (
                    <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                      <Image
                        src={"/icons/pagar.png"}
                        alt="pagar"
                        width={20}
                        height={20}
                      />
                      Pagamento
                    </button>
                  )}
                  {id ? (
                    <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                      <Image
                        src={"/icons/pagar.png"}
                        alt="check"
                        width={20}
                        height={20}
                      />
                      Pagamento
                    </button>
                  ) : (
                    <button className="cursor-pointer flex items-center px-4 py-2 rounded gap-2">
                      <Image
                        src={"/icons/check .svg"}
                        alt="check"
                        width={20}
                        height={20}
                      />
                      Abrir Comanda
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalComanda>
    </>
  );
}
