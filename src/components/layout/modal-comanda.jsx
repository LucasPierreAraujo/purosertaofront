"use client";

export default function ModalComanda({onClose, children }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-xs">
      <div className="flex flex-col bg-[#D9D9D9] w-[80%]  rounded-2xl shadow-xl max-h-[90%] overflow-auto relative gap-3">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
