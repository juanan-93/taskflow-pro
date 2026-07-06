import { PublicHeader } from "@/components/layout/public-header";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";

export default function HomePage() {
  return (
    <>
      <PublicHeader />

      <main>
        <HeroSection
          eyebrow="Nuevo sistema SaaS de productividad"
          title="Gestiona tareas, proyectos y equipos con una plataforma clara y profesional"
          description="TaskFlow Pro centraliza el trabajo operativo de tu equipo en una experiencia moderna, rápida y escalable construida con Next.js."
        />

        <FeaturesSection />
      </main>
    </>
  );
}
