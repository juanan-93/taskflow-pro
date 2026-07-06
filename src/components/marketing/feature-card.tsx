import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="transition-shadow duration-150 hover:shadow-elevation-2">
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </Card>
  );
}
