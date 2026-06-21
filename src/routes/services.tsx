import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, Stethoscope, Heart, Syringe, Truck, ClipboardList, MessageCircle, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Maklay Pharmacy & Stores" },
      { name: "description", content: "Prescription dispensing, health screening, wellness consultations, vaccinations and home delivery in Lugbe, Abuja." },
      { property: "og:title", content: "Pharmacy Services in Lugbe, Abuja" },
      { property: "og:description", content: "Everything you'd expect from your neighbourhood pharmacy — and a little more." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Pill, t: "Prescription Dispensing", d: "Accurate, confidential and fast prescription filling with pharmacist verification on every order." },
  { icon: Stethoscope, t: "Health Screening", d: "Blood pressure, blood sugar, BMI and basic wellness checks — quick results, friendly advice." },
  { icon: Syringe, t: "Vaccinations", d: "Routine and travel vaccinations administered by trained healthcare professionals." },
  { icon: Heart, t: "Wellness Consultations", d: "Personal one-on-one sessions for chronic care, supplements, weight and lifestyle support." },
  { icon: Truck, t: "Home Delivery", d: "Order online or by phone — same-day delivery across Lugbe and most of Abuja." },
  { icon: ClipboardList, t: "Medication Reviews", d: "Comprehensive reviews to ensure your medications work safely together." },
  { icon: MessageCircle, t: "Pharmacist Advice", d: "Free, confidential guidance on minor ailments, dosing and side effects — anytime." },
  { icon: Baby, t: "Mother & Baby Care", d: "Trusted products and advice for prenatal, infant and family health needs." },
];

function Services() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Everything for your wellbeing.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From your daily prescription to specialist health checks, our team is trained to look after you — with a smile.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-brand p-10 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-bold">Not sure what you need?</h2>
          <p className="mt-3 text-primary-foreground/90">Give our pharmacists a quick call — advice is always free.</p>
          <Button asChild size="lg" className="mt-6 bg-white text-primary hover:bg-white/90">
            <a href="tel:+2348062194930">Call 0806 219 4930</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
