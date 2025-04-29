
export default function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`bg-[#ADD8E6] border border-b-4 p-2 rounded-3xl w-[380px] h-[50px] border-[#D9D9D9] shadow-md text-black ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  