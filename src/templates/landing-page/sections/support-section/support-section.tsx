import { HeartHandshake, PaintbrushVertical, StoreIcon } from "lucide-react"
import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export const SupportSection = () => {
    return (
        <section className="relative container pb-8 md:py-10 bg-linear-to-r from-gray-900 to-gray-1000 max-w-7xl mx-auto px-15">
            <div className="absolute inset-0 hidden md:block bg-[url('/bg1.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>

            
            <div className="flex flex-col items-center gap-12 relative">
                <h2 className={`${ptSansCaption.className} text-balance text-center text text-[32px] leading-[120%] font-bold text-gray-100`}>Sua loja de afiliados, simples, do jeito que deveria ser</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                            <PaintbrushVertical className="h-6 w-10 text-white" />
                        </div>
                        <strong className="text text-[20px] leading-[120%] font-bold text-gray-100">Personalize seu site</strong>
                        <p className="text text-[14px] leading-[150%] font-semibold text-gray-100">Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com sua cara.</p>
                    </div>
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600 mb-4">
                            <StoreIcon className="h-6 w-10 text-white" />
                        </div>
                        <strong className="text text-[20px] leading-[120%] font-bold text-gray-100">Venda de qualquer loja</strong>
                        <p className="text text-[14px] leading-[150%] font-semibold text-gray-100">Não importa a loje, o Site.set permite que você insita qualquer link de.</p>
                    </div>
                    <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                            <HeartHandshake className="h-6 w-10 text-white" />
                        </div>
                        <strong className="text text-[20px] leading-[120%] font-bold text-gray-100">Receba suporte amigável</strong>
                        <p className="text text-[14px] leading-[150%] font-semibold text-gray-100">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}