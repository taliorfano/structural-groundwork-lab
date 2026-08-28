import { useState } from "react";

import { Container } from "@/components/layout/Container";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="border-t border-border bg-background">
      <Container className="grid gap-10 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent/70" aria-hidden="true" />
            <p className="label-editorial text-accent">Continue</p>
          </div>
          <h2 className="text-h2 mt-6 max-w-[16ch] text-[clamp(2rem,3.4vw,3rem)]">
            Continue descobrindo novos caminhos.
          </h2>
        </div>

        <div className="lg:pb-2">
          <p className="max-w-md text-muted-foreground">
            Histórias, destinos e dicas práticas — enviados com a mesma calma com que
            gostamos de viajar.
          </p>

          {sent ? (
            <p className="mt-7 text-meta text-foreground">
              Obrigada. Em breve você recebe o primeiro caminho.
            </p>
          ) : (
            <form
              className="mt-7 flex max-w-lg flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="min-w-0 flex-1 border-0 border-b border-input bg-transparent px-0 py-2 text-meta outline-none placeholder:text-muted-foreground/70 focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-sm bg-primary px-6 py-3 text-meta text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
              >
                Quero receber
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
