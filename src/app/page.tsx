
import { LandingPage } from "@/templates/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Site.set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    robots: 'index, follow',
    openGraph: {
        title: 'Site.set',
        description: 'Venda seus produtos como afiliado em um único lugar',
        url: 'https://rocketseat-nextjs-fundamentals.vercel.app/',
        siteName: 'Site.set',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url:'https://rocketseat-nextjs-fundamentals.vercel.app/',
                width: 800,
                height: 600,
                alt: 'Site.set'
            }
        ]
    }
}


export default function HomePage() {
    return <LandingPage/>;
}