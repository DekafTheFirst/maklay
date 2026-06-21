import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Clock, Heart, Pill, Stethoscope, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import counterImg from "@/assets/counter.jpg";
import familyImg from "@/assets/family.png";
import shelfImg from "@/assets/shelf.jpg";
import { products, formatNaira } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maklay Pharmacy & Stores | Lugbe, Abuja" },
      { name: "description", content: "Genuine medication, wellness essentials and friendly pharmacy care in River Park Estate, Lugbe. Order online or visit us today." },
      { property: "og:title", content: "Maklay Pharmacy & Stores" },
      { property: "og:description", content: "Trusted pharmacy serving Lugbe, Abuja." },
    ],
  }),
  component: Home,
});

function Home() {
  const { add } = useCart();
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Maklay pharmacy interior" width={1536} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Now serving River Park Estate, Lugbe
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Health that fits<br />
              <span className="text-white/80">into your everyday.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              Maklay Pharmacy & Stores delivers genuine medication, wellness products and expert pharmacist advice — in-store and to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/products">Shop products <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/services">Our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: ShieldCheck, t: "Genuine & verified", d: "100% authentic products from licensed sources." },
            { icon: Truck, t: "Fast delivery", d: "Same-day dispatch within Abuja." },
            { icon: Clock, t: "Open daily", d: "8 AM – 10 PM, every day of the week." },
            { icon: Heart, t: "Pharmacist care", d: "Free advice from qualified pharmacists." },
          ].map((f) => (
            <div key={f.t} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{f.t}</div>
                <div className="text-xs text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Care, beyond the counter</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { icon: Pill, t: "Prescription dispensing", d: "Accurate, confidential, and fast — with a pharmacist on hand for every prescription." },
            { icon: Stethoscope, t: "Health screening", d: "Blood pressure, blood sugar and BMI checks at affordable rates." },
            { icon: Heart, t: "Wellness consultations", d: "One-on-one advice for chronic conditions, supplements and lifestyle." },
          ].map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE STORY */}
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <img src={familyImg} alt="A family receiving their order at Maklay Pharmacy" width={1024} height={1024} loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-glow" />
            <img src={counterImg} alt="Pharmacist arranging medication" width={1024} height={1024} loading="lazy" className="absolute -bottom-8 -right-4 hidden aspect-square w-2/3 rounded-2xl border-4 border-background object-cover shadow-card sm:block" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why families choose us</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Healthcare that feels personal.</h2>
            <p className="mt-5 text-muted-foreground">
              From your first prescription to your daily vitamins, our pharmacists know your name and your story. We're not just dispensing medication — we're a part of your family's health journey.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { n: "5k+", l: "Happy customers" },
                { n: "24/7", l: "Online ordering" },
                { n: "100%", l: "Genuine products" },
                { n: "<2hr", l: "Lugbe delivery" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <div className="font-display text-3xl font-bold text-gradient-brand">{s.n}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shop online</span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Featured products</h2>
              <p className="mt-3 text-muted-foreground">Best-selling essentials, ready for pickup or delivery.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <div key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className={`flex aspect-square items-center justify-center bg-gradient-to-br ${p.gradient} text-7xl`}>
                  {p.emoji}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{p.category}</span>
                  <h3 className="mt-1 font-semibold">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-primary">{formatNaira(p.price)}</span>
                    <Button size="sm" onClick={() => { add(p); toast.success(`${p.name} added to cart`); }}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={shelfImg} alt="Vitamin and supplement shelves" width={1024} height={1024} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card" />
            <div className="space-y-4 pt-10">
              <img src={counterImg} alt="Pharmacist organizing medication" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-card" />
              <div className="rounded-2xl bg-gradient-brand p-5 text-primary-foreground shadow-glow">
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <div className="mt-2 font-display text-2xl font-bold">4.9 / 5</div>
                <div className="text-xs text-primary-foreground/80">From 500+ reviews</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Loved by our community</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">"Like having a doctor down the street."</h2>
            <div className="mt-8 space-y-5">
              {[
                { q: "They delivered my mum's BP meds the same day I called. Lifesavers.", a: "Ngozi A.", r: "River Park" },
                { q: "The pharmacist actually took time to explain my prescription. Rare these days.", a: "Emeka O.", r: "Lugbe" },
                { q: "Always genuine. Always friendly. My family doesn't go anywhere else.", a: "Fatima B.", r: "Sabon Lugbe" },
              ].map((t) => (
                <figure key={t.a} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <blockquote className="text-sm text-foreground">"{t.q}"</blockquote>
                  <figcaption className="mt-3 text-xs text-muted-foreground"><span className="font-semibold text-foreground">{t.a}</span> · {t.r}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Need it today? We've got you.</h2>
            <p className="mt-4 text-primary-foreground/90">Call ahead and we'll have your order ready for pickup — or have it delivered to your door anywhere in Abuja.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:+2348062194930">Call 0806 219 4930</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/products">Start shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
