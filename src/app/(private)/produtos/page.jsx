import ButtonNew from "@/components/ui/button-new";

export default function Page() {
  return (
    <section className="bg-[#FFD6B9] min-h-screen px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">PRODUTOS</h3>
          <ButtonNew>
            <span className="font-bold">NOVO PRODUTO</span>
          </ButtonNew>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg w-full h-[90vh] overflow-hidden">
          <div className="h-full w-full overflow-auto rounded-lg shadow-inner">
            <table className="w-full table-auto divide-y divide-gray-200 bg-white">
              <thead className=" sticky top-0 z-10">
                <tr>
                  <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-700">Produto</th>
                  <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-700">Tamanho</th>
                  <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-700">Valor</th>
                  <th className="w-1/4 px-6 py-3 text-left text-sm font-semibold text-gray-700">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Coca-Cola</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Lata 350ml</td>
                  <td className="px-6 py-4 text-sm text-gray-900">R$ 6,00</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex gap-4">
                      <button className="text-[blue-600] hover:underline">Editar</button>
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
