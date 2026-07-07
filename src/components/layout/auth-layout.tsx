import { CheckSquare } from "lucide-react";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-surface-page">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden bg-slate-950 px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary-600">
              <CheckSquare className="size-5" aria-hidden="true" />
            </span>

            <span className="font-display text-xl font-bold tracking-[-0.02em]">
              TaskFlow Pro
            </span>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-primary-100">
              Plataforma SaaS empresarial
            </p>

            <h1 className="font-display text-4xl font-bold tracking-[-0.04em]">
              Gestiona el trabajo complejo con claridad, control y velocidad.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Centraliza tareas, proyectos, equipos, archivos y notificaciones
              en una experiencia profesional preparada para escalar.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Diseñado para equipos que necesitan productividad, seguridad y
            orden.
          </p>
        </section>

        <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <CheckSquare className="size-5" aria-hidden="true" />
                </span>

                <span className="font-display text-xl font-bold tracking-[-0.02em] text-slate-900">
                  TaskFlow Pro
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-red p-6 shadow-elevation-2 sm:p-8">
              <div className="mb-8">
                <h1 className="font-display text-2xl font-bold tracking-[-0.03em] text-slate-900">
                  {title}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>

              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
