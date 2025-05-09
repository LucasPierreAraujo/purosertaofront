import Modal from "@/components/layout/modal";
import InputField from "@/components/ui/input-field";

export default function ModalNovoProduto({ closeModal }) {
  return (
    <Modal>
      <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
        <div className="flex items-center justify-center font-bold text-2xl mb-6">
          <h2>CADASTRAR PRODUTO</h2>
        </div>
        <div className="flex flex-col gap-6">
          <InputField
            type="text"
            label="Produto"
            placeholder="Nome do Item"
          />
          <InputField
            type="text"
            label="Tamanho"
            placeholder="Tamanho do Item"
          />
          <InputField
            type="text"
            label="Valor"
            placeholder="Valor do Item"
          />
        </div>
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={closeModal}
            className="cursor-pointer flex items-center px-4 py-2 gap-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={closeModal}
            className="cursor-pointer flex items-center px-4 py-2 gap-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Confirmar
          </button>
        </div>
      </div>
    </Modal>
  );
}
