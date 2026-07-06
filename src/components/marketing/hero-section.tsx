import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/layout/site-container";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function HeroSection({ eyebrow, title, description }: HeroSectionProps) {
  return (
    <section className="overflow-hidden bg-surface-page py-20 lg:py-24">
      <SiteContainer>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="premium">{eyebrow}</Badge>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-[-0.04em] text-text-primary md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg">
              Crear mi espacio
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>

            <Button variant="outline" size="lg">
              <PlayCircle className="size-5" aria-hidden="true" />
              Ver demo
            </Button>
          </div>

          <div className="mt-12 rounded-xl border border-border-subtle bg-white p-3 shadow-elevation-2">
            <div className="rounded-lg border border-border-subtle bg-slate-50 p-6 text-left">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Panel operativo
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Vista previa del dashboard de productividad
                  </p>
                </div>

                <Badge variant="success">Activo</Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-border-subtle bg-white p-4">
                  <p className="text-sm text-slate-500">Tareas abiertas</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">128</p>
                </div>

                <div className="rounded-lg border border-border-subtle bg-white p-4">
                  <p className="text-sm text-slate-500">Proyectos activos</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">12</p>
                </div>

                <div className="rounded-lg border border-border-subtle bg-white p-4">
                  <p className="text-sm text-slate-500">Equipo conectado</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
