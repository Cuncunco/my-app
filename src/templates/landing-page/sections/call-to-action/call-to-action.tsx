import Link from "next/link"
import { Button } from '../../../../components/ui/button'
import { ArrowRight, Store } from "lucide-react"
import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export const CallToAction = () =>{
    return (
        <section className="relative py-24 bg-linear-to-b from-cyan-900/20 to-gray-900  flex items-center justify-center mt-16">
            <div className="absolute inset-0 bg-[url('/background-call.svg')] bg-cover bg-center bg-no-repeat opacity-90"
            />
            
                
                <div className="container relative flex flex-col items-center">
                    <div className="absolute -top-25 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-900 w-fit rounded-full">
                        <Store className="text-cyan-300" />
                    </div> 
                    <div className="flex flex-col items-center gap-6 text-center">
                        <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-[32px] leading-[120%] font-bold`}>Crie uma loja online e inicie suas vendas ainda hoje</h2>
                            <Button asChild className="w-fit rounded-full hidden mt-4 md:mt-auto md:flex">
                                <Link href="/criar-loja">
                                    Criar loja grátis
                                <ArrowRight />
                                </Link>
                            </Button>
                    </div>
                </div>
            
        </section>
    )
} 