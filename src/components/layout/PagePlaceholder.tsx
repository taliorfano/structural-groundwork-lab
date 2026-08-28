import { Container } from "./Container";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Temporary Phase 1 page shell. Each of these routes receives its full
 * editorial treatment in the later phases.
 */
export function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <Container as="section" className="py-24 md:py-32">
      <p className="label-editorial text-muted-foreground">{eyebrow}</p>
      <h1 className="text-h2 mt-5 max-w-3xl">{title}</h1>
      <p className="text-body-lg mt-6 max-w-xl text-muted-foreground">{description}</p>
      <p className="text-meta mt-16 max-w-xl border-t border-border pt-6 text-muted-foreground">
        Esta página será construída nas próximas fases.
      </p>
    </Container>
  );
}
