import { createFileRoute } from "@tanstack/react-router";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Maklay Pharmacy & Stores" },
      { name: "description", content: "Meet the licensed pharmacists and friendly team behind Maklay Pharmacy & Stores in Lugbe, Abuja." },
      { property: "og:title", content: "Meet the Maklay Pharmacy Team" },
      { property: "og:description", content: "Friendly, qualified pharmacists ready to look after you." },
    ],
  }),
  component: Team,
});

const team = [
  { img: team1, name: "Pharm.", role: "Superintendent Pharmacist", bio: "10+ years experience in community pharmacy and chronic disease management." },
  { img: team2, name: "Pharm.", role: "Lead Pharmacist", bio: "Specialist in cardiology and prescription review. Loves patient education." },
  { img: team3, name: "Pharm.", role: "Pharmacy Technician", bio: "The warm face at our counter. Helps you find exactly what you need." },
];

function Team() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Team</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">The people behind the counter.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Qualified, registered and genuinely passionate about helping people live healthier lives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
