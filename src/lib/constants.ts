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

// ===== SERVICES =====
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
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
  },
  {
    id: "art-craft",
    title: "Art & Craft",
    description:
      "Unique handcrafted art pieces that bring creativity to life. From wall decor to personalized art, each piece is made with love and precision.",
    features: [
      "Custom art pieces",
      "Wall decor & frames",
      "Mixed media art",
      "Personalized creations",
    ],
    image: "/images/handmade-crafts.png",
    icon: Palette,
  },
  {
    id: "handmade-gifts",
    title: "Handmade Gifts",
    description:
      "Thoughtful, handcrafted gifts that speak from the heart. Perfect for weddings, birthdays, anniversaries, and every special moment.",
    features: [
      "Custom gift hampers",
      "Personalized packaging",
      "Corporate gifting",
      "Occasion-specific themes",
    ],
    image: "/images/custom-gifts.png",
    icon: Gift,
  },
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
  },
  {
    id: "custom-orders",
    title: "Custom Creative Orders",
    description:
      "Have a unique creative idea? We bring it to life! From custom crafts to personalized designs, no creative request is too big or small.",
    features: [
      "Any creative project",
      "Collaborative process",
      "Unique & one-of-a-kind",
      "Satisfaction guaranteed",
    ],
    image: "/images/handmade-crafts.png",
    icon: Star,
  },
];

// ===== PORTFOLIO =====
export interface PortfolioItem {
  id: string;
  title: string;
  category: "mehndi" | "dresses" | "crafts" | "gifts";
  image: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "mehndi", label: "Mehndi" },
  { id: "dresses", label: "Dresses" },
  { id: "crafts", label: "Crafts" },
  { id: "gifts", label: "Handmade Gifts" },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: "p1", title: "Royal Bridal Mehndi", category: "mehndi", image: "/images/bridal-mehndi.png" },
  { id: "p2", title: "Engagement Special", category: "mehndi", image: "/images/engagement-mehndi.png" },
  { id: "p3", title: "Festival Celebration", category: "mehndi", image: "/images/festival-mehndi.png" },
  { id: "p4", title: "Traditional Patterns", category: "mehndi", image: "/images/hero-banner.png" },
  { id: "p5", title: "Designer Lehenga", category: "dresses", image: "/images/portfolio-dress.png" },
  { id: "p6", title: "Embroidered Suit", category: "dresses", image: "/images/dress-designing.png" },
  { id: "p7", title: "Fusion Wear", category: "dresses", image: "/images/portfolio-dress.png" },
  { id: "p8", title: "Bridal Outfit", category: "dresses", image: "/images/dress-designing.png" },
  { id: "p9", title: "Handpainted Art", category: "crafts", image: "/images/handmade-crafts.png" },
  { id: "p10", title: "Wall Decor", category: "crafts", image: "/images/handmade-crafts.png" },
  { id: "p11", title: "Custom Craft Piece", category: "crafts", image: "/images/custom-gifts.png" },
  { id: "p12", title: "Wedding Gift Hamper", category: "gifts", image: "/images/custom-gifts.png" },
  { id: "p13", title: "Birthday Special", category: "gifts", image: "/images/custom-gifts.png" },
  { id: "p14", title: "Corporate Gifts", category: "gifts", image: "/images/handmade-crafts.png" },
  { id: "p15", title: "Arabic Mehndi", category: "mehndi", image: "/images/bridal-mehndi.png" },
  { id: "p16", title: "Custom Anarkali", category: "dresses", image: "/images/portfolio-dress.png" },
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
  phone: "+91 XXXXXXXXXX",
  email: "hello@triveniarthhouse.com",
  address: "Your City, Your State, India",
  hours: {
    weekdays: "10:00 AM – 7:00 PM",
    saturday: "10:00 AM – 5:00 PM",
    sunday: "By Appointment Only",
  },
  whatsapp: "91XXXXXXXXXX",
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
    title: "Design Discussion",
    description: "We present design concepts, explore options together, and finalize the perfect approach for your project.",
  },
  {
    step: 3,
    title: "Creation Process",
    description: "Our skilled artisans bring the design to life with meticulous craftsmanship and premium materials.",
  },
  {
    step: 4,
    title: "Final Delivery",
    description: "Your beautiful creation is carefully finished, quality-checked, and delivered with love and care.",
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
