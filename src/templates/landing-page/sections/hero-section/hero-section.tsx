import { ArrowRight, Clock, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-144 items-center">
          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <h1 className="text-gray-100 text-5xl leading-[120%] font-bold font-sans">
              Venda seus produtos como afiliado em um único lugar
            </h1>

            <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <Clock className="text-cyan-100 h-4 w-4" />
                  <span className="text-gray-200">
                    Crie o seu site em menos de 5 minutos
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Store className="text-cyan-100 h-4 w-4" />
                  <span className="text-gray-200">
                    Acompanhe e otimize seu negócio online
                  </span>
                </div>
              </div>

              <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start ls:items-start">
                <Button className="rounded-full w-fit" asChild>
                  <Link href="/criar-loja">
                    Criar loja grátis
                    <ArrowRight />
                  </Link>
                </Button>

                <p className="text-gray-400 text-body-xs">
                  Não precisa de cartão de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="hidden md:flex">
          <Image
            src="/background.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={500}
            height={500}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-[500px] pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
};