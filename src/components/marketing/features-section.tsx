import { Bell, FolderKanban, ShieldCheck, Users } from "lucide-react";
import { FeatureCard } from "@/components/marketing/feature-card";
import { SiteContainer } from "@/components/layout/site-container";

const features = [
  {
    icon: FolderKanban,
    title: "Gestión de tareas y proyectos",
    description:
      "Organiza tareas, prioridades, estados y fechas límite en una experiencia clara y escalable.",
  },
  {
    icon: Users,
    title: "Equipos y colaboración",
    description:
      "Gestiona usuarios, equipos, responsabilidades y asignaciones desde un mismo espacio de trabajo.",
  },
  {
    icon: ShieldCheck,
    title: "Roles y permisos",
    description:
      "Controla qué puede ver y hacer cada usuario mediante una base preparada para permisos avanzados.",
  },
  {
    icon: Bell,
    title: "Notificaciones operativas",
    description:
      "Mantén informado al equipo con avisos relevantes sobre tareas, proyectos y actividad importante.",
  },
];

export function FeaturesSection() {
  return (
    <section id="funciones" className="bg-white py-20">
      <SiteContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary-600">
            Funcionalidades principales
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Una base SaaS completa para aprender Next.js profesionalmente
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Cada módulo del curso añadirá una parte real de producto: frontend,
            backend, autenticación, roles, tareas, equipos, archivos y
            administración.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
