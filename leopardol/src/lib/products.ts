export type Collection = "women" | "men" | "accessories";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  collection: Collection;
  colors: string[];
  sizes: string[];
  description: string;
  badge?: string;
};

export const collections: Record<Collection, { title: string; blurb: string }> = {
  women: { title: "Women", blurb: "Bold silhouettes and everyday essentials." },
  men: { title: "Men", blurb: "Sharp tailoring and relaxed streetwear." },
  accessories: { title: "Accessories", blurb: "The finishing touch for every look." },
};

const apparelSizes = ["XS", "S", "M", "L", "XL"];

export const products: Product[] = [
  { slug: "spotted-satin-shirt", name: "Spotted Satin Shirt", price: 2499, compareAt: 3299, collection: "women", colors: ["#c8a165", "#1a1a1a"], sizes: apparelSizes, description: "A fluid satin shirt with a subtle animal-spot jacquard. Relaxed fit with a concealed placket.", badge: "Sale" },
  { slug: "wrap-midi-dress", name: "Wrap Midi Dress", price: 3199, collection: "women", colors: ["#7b2d26", "#0f0f0f"], sizes: apparelSizes, description: "Flattering wrap silhouette in a soft crepe that moves with you.", badge: "New" },
  { slug: "high-rise-wide-jeans", name: "High-Rise Wide Jeans", price: 2799, collection: "women", colors: ["#3b5b85", "#d9d4c7"], sizes: ["26", "28", "30", "32"], description: "Rigid denim cut high on the waist with a full, wide leg." },
  { slug: "cropped-knit-cardigan", name: "Cropped Knit Cardigan", price: 1899, collection: "women", colors: ["#e8dccb", "#3d3d3d"], sizes: apparelSizes, description: "Chunky rib-knit cardigan with tortoiseshell buttons." },
  { slug: "oversized-graphic-tee", name: "Oversized Graphic Tee", price: 1299, collection: "men", colors: ["#111111", "#f2f2f2"], sizes: apparelSizes, description: "Heavyweight cotton tee with a dropped shoulder and front print.", badge: "Bestseller" },
  { slug: "utility-cargo-pants", name: "Utility Cargo Pants", price: 2599, compareAt: 2999, collection: "men", colors: ["#4b5320", "#1c1c1c"], sizes: ["30", "32", "34", "36"], description: "Tapered cargos with articulated knees and six pockets.", badge: "Sale" },
  { slug: "camp-collar-shirt", name: "Camp Collar Shirt", price: 1999, collection: "men", colors: ["#c8a165", "#5a3e2b"], sizes: apparelSizes, description: "Boxy resort shirt in breathable viscose with a leopard print." },
  { slug: "bomber-jacket", name: "Bomber Jacket", price: 4499, collection: "men", colors: ["#1b1b1b", "#384b3a"], sizes: apparelSizes, description: "Classic nylon bomber with ribbed trims and a contrast lining.", badge: "New" },
  { slug: "leather-belt", name: "Leather Belt", price: 999, collection: "accessories", colors: ["#3e2a1c", "#000000"], sizes: ["S", "M", "L"], description: "Full-grain leather belt with a brushed metal buckle." },
  { slug: "canvas-tote", name: "Canvas Tote", price: 899, collection: "accessories", colors: ["#e6dfd0", "#111111"], sizes: ["One size"], description: "Roomy heavyweight canvas tote with an internal pocket." },
  { slug: "printed-silk-scarf", name: "Printed Silk Scarf", price: 1499, collection: "accessories", colors: ["#c8a165", "#7b2d26"], sizes: ["One size"], description: "Hand-rolled silk square in our signature spot print.", badge: "Bestseller" },
  { slug: "aviator-sunglasses", name: "Aviator Sunglasses", price: 1799, collection: "accessories", colors: ["#a68a64", "#1a1a1a"], sizes: ["One size"], description: "Metal-frame aviators with UV400 polarised lenses." },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

export const policies: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  return: {
    title: "Return Policy",
    sections: [
      { heading: "Eligibility", body: "Items can be returned within 7 days of delivery if unworn, unwashed and with original tags attached." },
      { heading: "How to return", body: "Start a return from My Orders. Our courier partner will collect the item from your address." },
    ],
  },
  refund: {
    title: "Refund Policy",
    sections: [
      { heading: "Timelines", body: "Refunds are issued to the original payment method within 5–7 business days of the return passing quality check." },
      { heading: "Cash on delivery", body: "COD orders are refunded as store credit or by bank transfer." },
    ],
  },
  shipping: {
    title: "Shipping Policy",
    sections: [
      { heading: "Dispatch", body: "Orders are dispatched within 24–48 hours on business days." },
      { heading: "Delivery", body: "Standard delivery takes 3–7 business days depending on your pincode. Shipping is free above ₹1,499." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      { heading: "What we collect", body: "We collect the details needed to process your order, such as name, address, phone number and email." },
      { heading: "How we use it", body: "Your data is used only to fulfil orders and, with consent, to send updates. We never sell personal data." },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      { heading: "Use of site", body: "By using this site you agree to these terms. Content is provided for personal, non-commercial use." },
      { heading: "Pricing", body: "Prices are listed in INR and include applicable taxes. We reserve the right to correct pricing errors." },
    ],
  },
};
