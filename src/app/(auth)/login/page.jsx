"use client"

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import InputField from "@/components/ui/input-field";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  const handleLogin = () => {
    
    router.push("/caixa"); 
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        <Image 
          src={"/images/logo.png"}
          alt="logo"
          width={379}
          height={204}
        />
        
        <div className="flex flex-col gap-4">
          <InputField type="text" placeholder="Usuário" />
          <InputField type="password" placeholder="Senha" />
          <Button className="mt-6" onClick={handleLogin}>
            <span className="font-bold">ENTRAR</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
