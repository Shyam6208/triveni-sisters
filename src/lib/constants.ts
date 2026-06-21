import {
  Palette,
  Gem,
  Sparkles,
  Scissors,
  Gift,
  Star,
  Heart,
  Crown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Brush,
  PenLine,
  Frame,
  Home,
  Flower2,
  type LucideIcon,
} from "lucide-react";

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book Now", href: "/booking" },
  { label: "Contact", href: "/contact" },
] as const;

// ===== SERVICE CATEGORIES =====
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceIds: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "mehndi-arts",
    title: "Mehndi Arts",
    description:
      "Exquisite henna artistry for weddings, engagements, and festivals — from traditional Indian motifs to contemporary Arabic patterns.",
    icon: Crown,
    serviceIds: ["bridal-mehndi", "engagement-mehndi", "festival-mehndi"],
  },
  {
    id: "art-craft",
    title: "Art & Craft",
    description:
      "Unique handcrafted art pieces and creative projects, from mixed media installations to personalized wall art.",
    icon: Palette,
    serviceIds: ["custom-art-pieces", "mixed-media-art", "wall-art-frames"],
  },
  {
    id: "paintings-sketches",
    title: "Paintings & Sketches",
    description:
      "Original paintings and hand-drawn sketches — canvas, acrylic, portrait, pencil, charcoal, and digital artwork.",
    icon: Brush,
    serviceIds: [
      "canvas-painting",
      "acrylic-painting",
      "portrait-painting",
      "pencil-sketches",
      "charcoal-sketches",
      "digital-artwork",
    ],
  },
  {
    id: "fashion-stitching",
    title: "Fashion & Stitching",
    description:
      "Bespoke dress designing, tailoring, and alterations — from traditional Indian wear to contemporary fusion styles.",
    icon: Gem,
    serviceIds: ["dress-designing", "stitching-services"],
  },
  {
    id: "handmade-gifts",
    title: "Handmade Gifts",
    description:
      "Thoughtful, handcrafted gifts for every occasion — personalized hampers, custom packaging, and corporate gifting.",
    icon: Gift,
    serviceIds: ["custom-gift-hampers", "personalized-gifts", "corporate-gifting"],
  },
  {
    id: "home-decor",
    title: "Home Decor",
    description:
      "Artistic home decoration pieces, wall accents, decorative frames, and festival-themed décor crafted by hand.",
    icon: Home,
    serviceIds: [
      "handmade-home-decor",
      "wall-decor",
      "decorative-frames",
      "festival-decorations",
      "customized-decorative-items",
      "artistic-interior-decor",
    ],
  },
];

// ===== SERVICES =====
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  category: string;
}

export const SERVICES: Service[] = [
  // --- Mehndi Arts ---
  {
    id: "bridal-mehndi",
    title: "Bridal Mehndi",
    description:
      "Exquisite bridal mehndi designs that tell your love story. From traditional to contemporary, we create intricate patterns that make your special day unforgettable.",
    features: [
      "Full hand & feet designs",
      "Personalized motifs",
      "Premium organic mehndi",
      "Pre-bridal consultation",
    ],
    image: "/images/bridal-mehndi.png",
    icon: Crown,
    category: "mehndi-arts",
  },
  {
    id: "engagement-mehndi",
    title: "Engagement Mehndi",
    description:
      "Elegant and delicate mehndi designs perfect for your engagement ceremony. Celebrate your new beginning with beautiful henna artistry.",
    features: [
      "Delicate patterns",
      "Ring-highlight designs",
      "Quick application",
      "Long-lasting color",
    ],
    image: "/images/engagement-mehndi.png",
    icon: Heart,
    category: "mehndi-arts",
  },
  {
    id: "festival-mehndi",
    title: "Festival Mehndi",
    description:
      "Celebrate every festival with stunning mehndi designs. From Diwali to Eid, Karva Chauth to Teej — perfect patterns for every occasion.",
    features: [
      "Festival-themed designs",
      "Group bookings available",
      "Quick & beautiful",
      "All-natural ingredients",
    ],
    image: "/images/festival-mehndi.png",
    icon: Sparkles,
    category: "mehndi-arts",
  },

  // --- Art & Craft ---
  {
    id: "custom-art-pieces",
    title: "Custom Art Pieces",
    description:
      "Unique handcrafted art pieces that bring creativity to life. From wall decor to personalized art, each piece is made with love and precision.",
    features: [
      "Custom art commissions",
      "Wall decor & frames",
      "Mixed media art",
      "Personalized creations",
    ],
    image: "/images/handmade-crafts.png",
    icon: Palette,
    category: "art-craft",
  },
  {
    id: "mixed-media-art",
    title: "Mixed Media Art",
    description:
      "Creative mixed media compositions combining textures, colors, and materials into stunning visual artworks for homes and offices.",
    features: [
      "Multi-material compositions",
      "Texture layering",
      "Modern abstract designs",
      "Custom sizes available",
    ],
    image: "/images/handmade-crafts.png",
    icon: Palette,
    category: "art-craft",
  },
  {
    id: "wall-art-frames",
    title: "Wall Art & Frames",
    description:
      "Beautiful handcrafted wall art and decorative frames that add character and charm to any space.",
    features: [
      "Handcrafted frames",
      "Artistic wall panels",
      "Custom sizing",
      "Premium materials",
    ],
    image: "/images/handmade-crafts.png",
    icon: Frame,
    category: "art-craft",
  },

  // --- Paintings & Sketches ---
  {
    id: "canvas-painting",
    title: "Canvas Painting",
    description:
      "Original canvas paintings crafted with passion — from serene landscapes to vibrant abstracts, each painting is a unique masterpiece.",
    features: [
      "Premium canvas & paints",
      "Custom sizes available",
      "Landscapes & abstracts",
      "Ready-to-hang finish",
    ],
    image: "/images/canvas-painting.png",
    icon: Brush,
    category: "paintings-sketches",
  },
  {
    id: "acrylic-painting",
    title: "Acrylic Painting",
    description:
      "Vibrant acrylic paintings with rich textures and bold colors. Perfect for modern interiors and art collectors.",
    features: [
      "Rich color palettes",
      "Textured finishes",
      "Modern & traditional styles",
      "Gallery-quality work",
    ],
    image: "/images/canvas-painting.png",
    icon: Brush,
    category: "paintings-sketches",
  },
  {
    id: "portrait-painting",
    title: "Portrait Painting",
    description:
      "Lifelike portrait paintings that capture the essence and personality of your loved ones. A timeless keepsake.",
    features: [
      "Realistic likenesses",
      "Multiple mediums",
      "From photographs",
      "Family & pet portraits",
    ],
    image: "/images/portrait-sketch.png",
    icon: PenLine,
    category: "paintings-sketches",
  },
  {
    id: "pencil-sketches",
    title: "Pencil Sketches",
    description:
      "Detailed pencil sketches with fine shading and realistic proportions. Ideal for portraits, landscapes, and custom illustrations.",
    features: [
      "Fine detail work",
      "Realistic shading",
      "Portrait & landscape",
      "Archival-grade paper",
    ],
    image: "/images/portrait-sketch.png",
    icon: PenLine,
    category: "paintings-sketches",
  },
  {
    id: "charcoal-sketches",
    title: "Charcoal Sketches",
    description:
      "Dramatic charcoal sketches with deep contrasts and expressive strokes. Bold, emotional, and captivating artwork.",
    features: [
      "Bold contrast & depth",
      "Expressive techniques",
      "Portraits & figures",
      "Professional framing",
    ],
    image: "/images/charcoal-sketch.png",
    icon: PenLine,
    category: "paintings-sketches",
  },
  {
    id: "digital-artwork",
    title: "Digital Artwork",
    description:
      "Modern digital illustrations and artwork for prints, social media, branding, and personalized digital gifts.",
    features: [
      "High-resolution output",
      "Print & digital formats",
      "Custom illustrations",
      "Quick turnaround",
    ],
    image: "/images/digital-artwork.png",
    icon: Sparkles,
    category: "paintings-sketches",
  },

  // --- Fashion & Stitching ---
  {
    id: "dress-designing",
    title: "Dress Designing",
    description:
      "Bespoke dress designing that brings your fashion vision to life. From traditional Indian wear to contemporary fusion, we create garments that fit perfectly.",
    features: [
      "Custom measurements",
      "Fabric selection",
      "Embroidery & embellishments",
      "Design consultation",
    ],
    image: "/images/dress-designing.png",
    icon: Gem,
    category: "fashion-stitching",
  },
  {
    id: "stitching-services",
    title: "Stitching & Alterations",
    description:
      "Expert stitching and alteration services for the perfect fit. We handle everything from simple hemming to complex garment reconstruction.",
    features: [
      "Perfect fitting",
      "Alterations & repairs",
      "Blouse stitching",
      "Express service available",
    ],
    image: "/images/dress-designing.png",
    icon: Scissors,
    category: "fashion-stitching",
  },

  // --- Handmade Gifts ---
  {
    id: "custom-gift-hampers",
    title: "Custom Gift Hampers",
    description:
      "Thoughtful, handcrafted gift hampers curated for every occasion — weddings, birthdays, anniversaries, and corporate events.",
    features: [
      "Curated gift selection",
      "Premium packaging",
      "Occasion-specific themes",
      "Bulk order discounts",
    ],
    image: "/images/custom-gifts.png",
    icon: Gift,
    category: "handmade-gifts",
  },
  {
    id: "personalized-gifts",
    title: "Personalized Gifts",
    description:
      "One-of-a-kind personalized gifts with custom names, messages, and designs. Make every gift truly special.",
    features: [
      "Custom engraving",
      "Photo gifts",
      "Name personalization",
      "Gift wrapping included",
    ],
    image: "/images/custom-gifts.png",
    icon: Gift,
    category: "handmade-gifts",
  },
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    description:
      "Elegant corporate gift solutions for teams, clients, and events. Professional packaging with brand customization.",
    features: [
      "Bulk orders",
      "Brand customization",
      "Professional packaging",
      "Timely delivery",
    ],
    image: "/images/custom-gifts.png",
    icon: Star,
    category: "handmade-gifts",
  },

  // --- Home Decor ---
  {
    id: "handmade-home-decor",
    title: "Handmade Home Decor",
    description:
      "Beautifully handcrafted home decoration pieces that add warmth, character, and artistic charm to every corner of your home.",
    features: [
      "Unique handcrafted pieces",
      "Eco-friendly materials",
      "Custom color matching",
      "Artisanal quality",
    ],
    image: "/images/home-decor.png",
    icon: Home,
    category: "home-decor",
  },
  {
    id: "wall-decor",
    title: "Wall Decor",
    description:
      "Artistic wall decorations including hangings, panels, and accent pieces that transform plain walls into stunning focal points.",
    features: [
      "Wall hangings & panels",
      "Macramé & textile art",
      "Metal & wood accents",
      "Custom dimensions",
    ],
    image: "/images/wall-decor.png",
    icon: Frame,
    category: "home-decor",
  },
  {
    id: "decorative-frames",
    title: "Decorative Frames",
    description:
      "Hand-finished decorative frames for photos, mirrors, and artwork. Each frame is a work of art in itself.",
    features: [
      "Hand-carved details",
      "Multiple finishes",
      "Custom sizes",
      "Mirror & photo frames",
    ],
    image: "/images/wall-decor.png",
    icon: Frame,
    category: "home-decor",
  },
  {
    id: "festival-decorations",
    title: "Festival Decorations",
    description:
      "Beautiful handcrafted decorations for Diwali, Navratri, Eid, Christmas, and all festive celebrations.",
    features: [
      "Festival-specific themes",
      "Rangoli & torans",
      "Eco-friendly materials",
      "Bulk orders welcome",
    ],
    image: "/images/festival-decoration.png",
    icon: Flower2,
    category: "home-decor",
  },
  {
    id: "customized-decorative-items",
    title: "Customized Decor Items",
    description:
      "Bespoke decorative items tailored to your home's aesthetic — from table centerpieces to shelf accents.",
    features: [
      "Personalized designs",
      "Color coordination",
      "Table & shelf accents",
      "Gift-ready packaging",
    ],
    image: "/images/home-decor.png",
    icon: Sparkles,
    category: "home-decor",
  },
  {
    id: "artistic-interior-decor",
    title: "Artistic Interior Decor",
    description:
      "Statement interior decor pieces that blend art with functionality — handcrafted vases, sculptures, and artistic accents.",
    features: [
      "Statement pieces",
      "Handcrafted sculptures",
      "Artistic vases",
      "Interior consultation",
    ],
    image: "/images/home-decor.png",
    icon: Home,
    category: "home-decor",
  },
];

// Helper: get services by category ID
export function getServicesByCategory(categoryId: string): Service[] {
  return SERVICES.filter((s) => s.category === categoryId);
}

// Helper: get a featured service from each category
export function getFeaturedServices(): Service[] {
  return SERVICE_CATEGORIES.map(
    (cat) => SERVICES.find((s) => s.category === cat.id)!
  );
}

// ===== PORTFOLIO =====
export interface PortfolioItem {
  id: string;
  title: string;
  category:
    | "mehndi"
    | "paintings"
    | "sketches"
    | "dresses"
    | "crafts"
    | "gifts"
    | "home-decor";
  image: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "mehndi", label: "Mehndi" },
  { id: "paintings", label: "Paintings" },
  { id: "sketches", label: "Sketches" },
  { id: "crafts", label: "Crafts" },
  { id: "dresses", label: "Dress Designs" },
  { id: "gifts", label: "Gifts" },
  { id: "home-decor", label: "Home Decor" },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Mehndi
  { id: "m1", title: "Royal Bridal Mehndi", category: "mehndi", image: "/images/bridal-mehndi.png" },
  { id: "m2", title: "Minimalist Engagement Henna", category: "mehndi", image: "/images/engagement-mehndi.png" },
  { id: "m3", title: "Festive Diwali Mehndi", category: "mehndi", image: "/images/festival-mehndi.png" },

  // Paintings
  { id: "p1", title: "Abstract Canvas Splashes", category: "paintings", image: "/images/canvas-painting.png" },
  { id: "p2", title: "Modern Digital Mandala", category: "paintings", image: "/images/digital-artwork.png" },

  // Sketches
  { id: "s1", title: "Hyper-realistic Pencil Portrait", category: "sketches", image: "/images/portrait-sketch.png" },
  { id: "s2", title: "Dramatic Charcoal Dancer", category: "sketches", image: "/images/charcoal-sketch.png" },

  // Dresses
  { id: "d1", title: "Deep Burgundy Fusion Lehenga", category: "dresses", image: "/images/dress-designing.png" },
  { id: "d2", title: "Modern Bridal Anarkali", category: "dresses", image: "/images/portfolio-dress.png" },

  // Crafts
  { id: "c1", title: "Mixed Media Resin Art", category: "crafts", image: "/images/handmade-crafts.png" },

  // Gifts
  { id: "g1", title: "Luxury Bespoke Gift Hamper", category: "gifts", image: "/images/custom-gifts.png" },

  // Home Decor
  { id: "h1", title: "Handcrafted Artisanal Vases", category: "home-decor", image: "/images/home-decor.png" },
  { id: "h2", title: "Metallic Macrame Wall Art", category: "home-decor", image: "/images/wall-decor.png" },
  { id: "h3", title: "Festive Diwali Setup", category: "home-decor", image: "/images/festival-decoration.png" },
];

// ===== TESTIMONIALS =====
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Bride",
    review:
      "The bridal mehndi was absolutely stunning! Every guest complimented my hands. The sisters put so much love and detail into every design. Truly the best mehndi artist I've ever seen.",
    rating: 5,
    image: "/images/bridal-mehndi.png",
  },
  {
    id: "t2",
    name: "Ananya Patel",
    role: "Corporate Client",
    review:
      "We ordered custom gift hampers for our entire team and they were extraordinary. The attention to detail and personalized touch made each gift special. Highly recommend!",
    rating: 5,
    image: "/images/custom-gifts.png",
  },
  {
    id: "t3",
    name: "Meera Kapoor",
    role: "Fashion Enthusiast",
    review:
      "Got my wedding outfit custom designed and it was beyond my expectations. The fabric quality, embroidery, and fit were all perfect. Will definitely come back for more!",
    rating: 5,
    image: "/images/dress-designing.png",
  },
  {
    id: "t4",
    name: "Ritu Agarwal",
    role: "Bride's Mother",
    review:
      "Booked them for my daughter's wedding mehndi. The entire family was served with beautiful designs. Professional, punctual, and incredibly talented. A perfect choice!",
    rating: 5,
    image: "/images/engagement-mehndi.png",
  },
  {
    id: "t5",
    name: "Kavita Joshi",
    role: "Art Collector",
    review:
      "The handcrafted art pieces I ordered for my home are gorgeous. Each piece is unique and adds such warmth to my space. Their creativity knows no bounds!",
    rating: 5,
    image: "/images/handmade-crafts.png",
  },
  {
    id: "t6",
    name: "Sunita Verma",
    role: "Repeat Customer",
    review:
      "I've been a loyal customer for over 2 years now. From festival mehndi to custom gifts, everything they create is magical. The three sisters are truly talented artists.",
    rating: 5,
    image: "/images/festival-mehndi.png",
  },
  {
    id: "t7",
    name: "Neha Gupta",
    role: "Bride",
    review:
      "From the initial consultation to the final design, the experience was premium. My bridal mehndi had our love story woven into the pattern. Absolutely magical!",
    rating: 5,
    image: "/images/bridal-mehndi.png",
  },
  {
    id: "t8",
    name: "Deepika Singh",
    role: "Event Planner",
    review:
      "We regularly collaborate with Triveni Art House for our events. Their creativity, professionalism, and the quality of work is consistently outstanding. Top-notch service!",
    rating: 5,
    image: "/images/hero-banner.png",
  },
];

// ===== CONTACT =====
export const CONTACT_INFO = {
  phone: "+91 9953889028",
  email: "hello@triveniarthhouse.com",
  address: "Your City, Your State, India",
  hours: {
    weekdays: "10:00 AM – 7:00 PM",
    saturday: "10:00 AM – 5:00 PM",
    sunday: "By Appointment Only",
  },
  whatsapp: "919953889028",
  social: {
    instagram: "https://instagram.com/triveniarthhouse",
    facebook: "https://facebook.com/triveniarthhouse",
    youtube: "https://youtube.com/@triveniarthhouse",
    pinterest: "https://pinterest.com/triveniarthhouse",
  },
};

// ===== WHY CHOOSE US =====
export const WHY_CHOOSE_US = [
  {
    title: "Handmade Excellence",
    description: "Every creation is meticulously handcrafted with love, passion, and attention to the finest details.",
    icon: "✨",
  },
  {
    title: "Personalized Designs",
    description: "We listen to your vision and bring it to life with custom designs tailored just for you.",
    icon: "🎨",
  },
  {
    title: "Attention to Detail",
    description: "From intricate mehndi patterns to perfect stitching, we obsess over every tiny detail.",
    icon: "💎",
  },
  {
    title: "Trusted by Customers",
    description: "Hundreds of happy customers trust us with their most special moments and celebrations.",
    icon: "❤️",
  },
  {
    title: "Multi-Craft Expertise",
    description: "From paintings and sketches to home decor and fashion — we master every creative discipline.",
    icon: "🖼️",
  },
  {
    title: "Premium Materials",
    description: "We use only the finest materials — organic mehndi, artist-grade paints, premium fabrics, and quality craft supplies.",
    icon: "👑",
  },
];

// ===== CREATIVE PROCESS =====
export const CREATIVE_PROCESS = [
  {
    step: 1,
    title: "Consultation",
    description: "Share your vision, ideas, and requirements with us. We listen carefully to understand exactly what you need.",
  },
  {
    step: 2,
    title: "Design Planning",
    description: "We present design concepts, explore options together, and finalize the perfect approach for your project.",
  },
  {
    step: 3,
    title: "Handmade Creation",
    description: "Our skilled artisans bring the design to life with meticulous craftsmanship and premium materials.",
  },
  {
    step: 4,
    title: "Quality Review",
    description: "Every creation undergoes careful quality inspection to ensure it meets our exacting standards of excellence.",
  },
  {
    step: 5,
    title: "Delivery",
    description: "Your beautiful creation is carefully packaged and delivered to you with love and care.",
  },
];

// ===== BRAND VALUES =====
export const BRAND_VALUES = [
  { title: "Artistry", description: "Every piece we create is a work of art, reflecting our passion for beauty and creativity." },
  { title: "Authenticity", description: "We stay true to traditional craftsmanship while embracing modern design sensibilities." },
  { title: "Excellence", description: "We never compromise on quality, using the finest materials and techniques in everything we do." },
  { title: "Connection", description: "We build lasting relationships with our clients, understanding their stories and celebrations." },
];

// ===== BUDGET RANGES =====
export const BUDGET_RANGES = [
  "₹1,000 – ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+",
  "Discuss Later",
];

// ===== ICON MAP FOR CONTACT =====
