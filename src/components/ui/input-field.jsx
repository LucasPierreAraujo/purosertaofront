
export default function InputField({ label, type = "text", placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Renderiza o label acima do input */}
      {label && <label >{label}</label>}
      
      {/* O input com as props passadas */}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-b-4 p-2 rounded-3xl w-[380px] h-[50px] border-[#D9D9D9] shadow-md text-black"
        {...props}
      />
    </div>
  );
}
