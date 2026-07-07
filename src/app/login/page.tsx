import Link from "next/link";
import { AuthLayout } from "@/components/layout/auth-layout";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Accede a tu espacio de trabajo"
      description="Introduce tus credenciales para continuar gestionando tareas, proyectos y equipos."
    >
      <form className="space-y-5">
        <Field helperText="Usa el correo asociado a tu organización.">
          <Label htmlFor="email" isRequired>
            Correo electrónico
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nombre@empresa.com"
            autoComplete="email"
          />
        </Field>

        <Field>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="password" isRequired>
              Contraseña
            </Label>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              ¿Has olvidado tu contraseña?
            </Link>
          </div>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Introduce tu contraseña"
            autoComplete="current-password"
          />
        </Field>

        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="remember"
              className="size-4 rounded border-slate-300 text-primary-600 focus:ring-primary-100"
            />
            Recordarme
          </label>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Iniciar sesión
        </Button>

        <p className="text-center text-sm text-slate-600">
          ¿Todavía no tienes cuenta?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            Crear cuenta
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
