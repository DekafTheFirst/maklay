import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Maklay Pharmacy & Stores" },
      { name: "description", content: "Learn the story behind Maklay Pharmacy & Stores — a trusted community pharmacy in Lugbe, Abuja." },
      { property: "og:title", content: "About Maklay Pharmacy & Stores" },
      { property: "og:description", content: "A community pharmacy built on trust, care and accessibility." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About us</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Built for the Lugbe community.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Maklay Pharmacy & Stores opened its doors in River Park Estate with one simple promise — to make quality healthcare easy, friendly and within reach for every family in our neighbourhood.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-muted-foreground">
            <p>Beyond filling prescriptions, we believe a pharmacy should be a place where people are listened to. Whether you walk in with a fever, a question, or just need someone to talk you through your medication, our team is here.</p>
            <p>We stock a carefully curated range of medication, wellness products and personal-care essentials — sourced only from licensed distributors — so you never have to second-guess what you take home.</p>
            <p>Today, we serve hundreds of families across River Park, Lugbe and the wider FCT, both in-store and through online orders.</p>
          </div>

          <div className="grid gap-5">
            {[
              { icon: Target, t: "Our Mission", d: "To deliver safe, affordable and accessible healthcare to every household in our community." },
              { icon: Eye, t: "Our Vision", d: "To become Abuja's most loved neighbourhood pharmacy chain — known for trust, warmth and reliability." },
              { icon: Heart, t: "Our Values", d: "Integrity. Care. Excellence. Every interaction, every prescription, every day." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{v.t}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
