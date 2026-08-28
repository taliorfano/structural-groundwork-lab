import { useState } from "react";

import { Container } from "@/components/layout/Container";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="border-t border-border bg-sand/60">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
        <div>
          <p className="label-editorial text-accent">Newsletter</p>
          <h2 className="text-h3 mt-4 max-w-[20ch]">Continue descobrindo novos caminhos.</h2>
        </div>

        <div>
          <p className="text-meta max-w-md text-muted-foreground">
            Histórias, destinos e dicas práticas — enviados com a mesma calma com que
            gostamos de viajar.
          </p>

          {sent ? (
            <p className="mt-6 text-meta text-foreground">
              Obrigada. Em breve você recebe o primeiro caminho.
            </p>
          ) : (
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
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
                className="min-w-0 flex-1 rounded-sm border border-input bg-background px-4 py-3 text-meta outline-none placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                className="rounded-sm bg-foreground px-6 py-3 text-meta text-background transition-opacity duration-200 hover:opacity-90"
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
