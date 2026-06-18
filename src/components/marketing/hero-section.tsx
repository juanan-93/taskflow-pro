type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function HeroSection({ eyebrow, title, description }: HeroSectionProps) {
  return (
    <section>
      <p>{eyebrow}</p>

      <h1>{title}</h1>

      <p>{description}</p>
    </section>
  );
}
