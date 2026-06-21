import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatNaira } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Trash2, ShoppingBag, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Maklay Pharmacy & Stores" },
      { name: "description", content: "Review your order and check out for pickup or delivery." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { items, total, setQty, remove, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const delivery = total > 0 ? 1500 : 0;

  function handlePlace(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill in your name, phone and delivery address.");
      return;
    }
    setPlaced(true);
    clear();
    toast.success("Order placed! We'll call you shortly.");
  }

  if (placed) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold">Order received!</h1>
        <p className="mt-3 text-muted-foreground">Thanks for shopping with Maklay. Our team will call you on {form.phone || "your number"} to confirm and arrange delivery.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild><Link to="/products">Continue shopping</Link></Button>
          <Button asChild variant="outline"><Link to="/">Back home</Link></Button>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
          <ShoppingBag className="h-8 w-8" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Looks like you haven't added anything yet. Browse our featured products to get started.</p>
        <Button asChild className="mt-6"><Link to="/products">Shop products</Link></Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Your cart</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_400px]">
        <div className="space-y-4">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} text-4xl`}>
                {product.emoji}
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{product.category}</div>
                    <h3 className="mt-0.5 font-semibold">{product.name}</h3>
                  </div>
                  <button onClick={() => remove(product.id)} className="text-muted-foreground transition-colors hover:text-destructive" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(product.id, qty - 1)} className="flex h-8 w-8 items-center justify-center hover:bg-accent rounded-l-full" aria-label="Decrease">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="flex h-8 w-8 items-center justify-center hover:bg-accent rounded-r-full" aria-label="Increase">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-display font-bold text-primary">{formatNaira(product.price * qty)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Checkout</h2>
          <form onSubmit={handlePlace} className="mt-5 space-y-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="address">Delivery address</Label>
              <Textarea id="address" required rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea id="notes" rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="mt-1.5" />
            </div>

            <div className="space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatNaira(total)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{formatNaira(delivery)}</span></div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-semibold"><span>Total</span><span className="font-display text-primary">{formatNaira(total + delivery)}</span></div>
            </div>

            <Button type="submit" size="lg" className="w-full">Place order</Button>
            <p className="text-center text-xs text-muted-foreground">Pay on delivery or by transfer. We'll call to confirm.</p>
          </form>
        </aside>
      </div>
    </section>
  );
}
