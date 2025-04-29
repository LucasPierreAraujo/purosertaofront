
export default function InputField({ type = "text", placeholder, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="border border-b-4 p-2 rounded-3xl w-[380px] h-[50px] border-[#D9D9D9] shadow-md text-black"
        {...props}
      />
    );
  }
  