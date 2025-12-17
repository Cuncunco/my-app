import { Button } from '../../../../components/ui/button';
import  Link  from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const FeatureSection = () => {
    return (
    <div className="max-w-7xl mx-auto px-4">
        <section className="container  grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10 rounded-2xl">

            <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-900 md:p-12">
                <span className="text-[12px] leading-[100%] font-semibold text-blue-300 bg-blue-700 px-2 py-1 w-fit rounded-sm uppercase">
                    Simples
                </span>
                <h2 className="text-[28px] leading-[120%] font-bold text-gray-100 ">
                    Crie um catálogo de produtos online em poucos minutos
                </h2>
            </div>

            <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-900 md:p-12">
                <span className="text-[12px] leading-[100%] font-semibold text-blue-300 bg-blue-700 px-2 py-1 w-fit rounded-sm uppercase">
                    Prático
                </span>
                <h2 className="text-[28px] leading-[120%] font-bold text-gray-100 ">
                    Venda para seu público através de uma plataforma única
                </h2>
            </div>

        <div className="col-span-full flex flex-col gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg p-6 md:p-12 bg-gray-900">
                <div className="flex flex-col gap-4 ">
                    <span className="text-[12px] leading-[100%] font-semibold text-blue-300 bg-blue-700 px-2 py-1 w-fit rounded-sm uppercase">
                        Personalizável
                    </span>
                    <h2 className="text-[28px] leading-[120%] font-bold text-gray-100 ">
                        Tenha uma loja online personalizada com a cara da sua empresa
                    </h2>

                    <Button asChild className="w-fit rounded-full hidden mt-4 md:mt-auto md:flex">
                        <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight />
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <div className="w-full max-w-md overflow-hidden">
                        <Image 
                            src="/image.svg"
                            alt="features"
                            width={440}
                            height={330}
                            className="object-cover w-full"
                        />
                    </div>
                    <Button asChild className="w-full gap-2 rounded-full  mt-4 md:mt-auto md:hidden">
                        <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight />
                        </Link>
                    </Button>
                </div>
                
            </div>
        </div>
        </section>
    </div>
    )
}