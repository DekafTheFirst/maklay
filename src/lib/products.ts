export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  emoji: string;
  gradient: string;
};

export const products: Product[] = [
  { id: "p1", name: "Paracetamol 500mg", category: "Pain Relief", price: 1500, description: "Fast-acting pain and fever relief, 24 tablets per pack.", emoji: "💊", gradient: "from-violet-500 to-blue-500" },
  { id: "p2", name: "Vitamin C 1000mg", category: "Vitamins", price: 4500, description: "Immune-boosting effervescent tablets, orange flavor.", emoji: "🍊", gradient: "from-amber-400 to-orange-500" },
  { id: "p3", name: "Amoxicillin 500mg", category: "Antibiotics", price: 3200, description: "Broad-spectrum antibiotic. Prescription required.", emoji: "🧪", gradient: "from-blue-500 to-cyan-500" },
  { id: "p4", name: "Blood Pressure Monitor", category: "Devices", price: 25000, description: "Digital upper-arm monitor with memory function.", emoji: "🩺", gradient: "from-purple-600 to-indigo-600" },
  { id: "p5", name: "Multivitamin Daily", category: "Vitamins", price: 6800, description: "Complete daily nutrition, 30-day supply.", emoji: "🌿", gradient: "from-emerald-500 to-teal-500" },
  { id: "p6", name: "Hand Sanitizer 500ml", category: "Personal Care", price: 2200, description: "70% alcohol formula with aloe vera.", emoji: "🧴", gradient: "from-sky-400 to-blue-600" },
  { id: "p7", name: "Cough Syrup 100ml", category: "Cold & Flu", price: 2800, description: "Soothing relief for dry and chesty coughs.", emoji: "🍯", gradient: "from-rose-400 to-pink-500" },
  { id: "p8", name: "Glucose Test Strips", category: "Devices", price: 8500, description: "Pack of 50 strips for accurate glucose monitoring.", emoji: "🔬", gradient: "from-fuchsia-500 to-purple-600" },
];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);
