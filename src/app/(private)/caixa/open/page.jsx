import Button from "@/components/ui/button";
import Image from "next/image";

export default function page(){
    return(
        <section className="bg-[#FFD6B9] min-h-screen flex items-center justify-center">
            <div className="bg-white px-12 py-10 rounded-3xl shadow-md flex flex-col items-center gap-6">
                <h2 className="font-bold text-3xl">
                    LUCAS
                </h2>
                <Button>
                    <span className="flex items-center justify-center font-bold gap-4">
                        ABRIR CAIXA
                        <Image 
                            src={"/icons/CashRegister.png"}
                            alt="register"
                            width={24}
                            height={24}
                        />
                    </span>
                </Button>

                

            </div>

        </section>
    )
}