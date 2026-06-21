import { Link } from "@tanstack/react-router";
import { Plus, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand">
              <Plus className="h-5 w-5 text-primary-foreground" strokeWidth={3} />
            </div>
            <div>
              <div className="font-display text-lg font-bold">Maklay Pharmacy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">& Stores</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Your trusted neighbourhood pharmacy in Lugbe, Abuja. Genuine medication, expert advice, and friendly care — every day.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />8 Jim Ovia Avenue, Shop 5&amp;6, River Park Estate, Lugbe, Abuja</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="tel:+2348062194930" className="hover:text-foreground">0806 219 4930</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Mon–Sun · 8:00 AM – 10:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/services", l: "Services" },
              { to: "/team", l: "Our Team" },
              { to: "/products", l: "Shop Products" },
              { to: "/cart", l: "Cart" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">{l.l}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Maklay Pharmacy & Stores. All rights reserved.</p>
          <p>Built with care for the Lugbe community.</p>
        </div>
      </div>
    </footer>
  );
}
