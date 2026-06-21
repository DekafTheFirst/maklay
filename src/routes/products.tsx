import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products, formatNaira } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop Products — Maklay Pharmacy & Stores" },
      { name: "description", content: "Browse genuine medication, vitamins, devices and personal care. Order online for fast delivery in Abuja." },
      { property: "og:title", content: "Shop Pharmacy Products Online" },
      { property: "og:description", content: "Pickup or fast delivery across Abuja." },
    ],
  }),
  component: Products,
});

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

function Products() {
  const { add } = useCart();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => products.filter((p) =>
    (cat === "All" || p.category === cat) &&
    (q.trim() === "" || p.name.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shop</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Featured products</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">All prices in Naira. Add items to your cart and check out when you're ready.</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="pl-9 h-11" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    cat === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:bg-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border py-20 text-center text-muted-foreground">
            No products match your search.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <div key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className={`flex aspect-square items-center justify-center bg-gradient-to-br ${p.gradient} text-7xl transition-transform duration-500 group-hover:scale-105`}>
                  {p.emoji}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{p.category}</span>
                  <h3 className="mt-1 font-semibold">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-bold text-primary">{formatNaira(p.price)}</span>
                    <Button size="sm" onClick={() => { add(p); toast.success(`${p.name} added to cart`, { icon: <ShoppingBag className="h-4 w-4" /> }); }}>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
