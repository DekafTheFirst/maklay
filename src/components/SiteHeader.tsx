import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/products", label: "Products" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Plus className="h-5 w-5 text-primary-foreground" strokeWidth={3} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">Maklay</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pharmacy & Stores</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent">
            <ShoppingCart className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-brand px-1 text-[10px] font-bold text-primary-foreground shadow-soft">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2" onClick={() => setOpen(false)}>
              <Link to="/products">Shop Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
