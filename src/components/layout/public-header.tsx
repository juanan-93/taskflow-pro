import Link from "next/link";
import { CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/layout/site-container";

const navigationItems = [
  {
    label: "Producto",
    href: "#producto",
  },
  {
    label: "Funciones",
    href: "#funciones",
  },
  {
    label: "Precios",
    href: "#precios",
  },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/90 backdrop-blur">
      <SiteContainer className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="TaskFlow Pro"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-600 text-white">
            <CheckSquare className="size-5" aria-hidden="true" />
          </span>

          <span className="font-display text-lg font-bold tracking-[-0.02em] text-slate-900">
            TaskFlow Pro
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Iniciar sesión
          </Button>

          <Button size="sm">Empezar gratis</Button>
        </div>
      </SiteContainer>
    </header>
  );
}
