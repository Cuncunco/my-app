import { CallToAction, CustomerStorySection, HeroSection, SupportSection,FeatureSection } from "./sections";

export const LandingPage = () => {
    return (
        <article className="flex flex-col md:gap-10">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
            <CallToAction />
        </article>
    )
}