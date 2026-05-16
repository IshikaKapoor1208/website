"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Boxes,
  ChevronDown,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  Sparkles,
  Sprout,
  Truck,
  X
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1501746877-14782df58970?auto=format&fit=crop&q=85&w=1800";

const products = [
  {
    name: "Mangoes",
    image:
      "https://images.unsplash.com/photo-1501746877-14782df58970?auto=format&fit=crop&q=80&w=1200",
    alt: "Fresh mangoes prepared for export",
    description:
      "Premium export-quality mangoes sourced from trusted farms across India, naturally ripened and carefully packed."
  },
  {
    name: "Cashew",
    image:
      "https://images.unsplash.com/photo-1579282940319-c483172dd0f2?auto=format&fit=crop&q=80&w=1200",
    alt: "High-grade Indian cashews",
    description:
      "High-grade Indian cashews processed with quality standards to preserve freshness, taste, and nutritional value."
  },
  {
    name: "Turmeric",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Curcuma_longa_roots.jpg/1280px-Curcuma_longa_roots.jpg",
    alt: "Turmeric roots and powder",
    description:
      "Pure turmeric known for rich color, aroma, and natural benefits for food, spice, and wellness markets."
  },
  {
    name: "Kokam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Garcinia_indica_fruit.jpg",
    alt: "Kokam fruit",
    description:
      "Authentic kokam from coastal regions of India, valued in beverages, culinary applications, and wellness products."
  }
];

const missions = [
  { label: "High-quality Indian products", Icon: Leaf },
  { label: "Long-term partnerships", Icon: Handshake },
  { label: "Quality standards", Icon: BadgeCheck },
  { label: "Timely delivery", Icon: Truck }
];

const reasons = [
  {
    label: "Farm Fresh",
    Icon: Sprout,
    image: "https://images.unsplash.com/photo-1501746877-14782df58970?auto=format&fit=crop&q=80&w=800",
    description: "Sourced directly from trusted farms for freshness buyers can taste."
  },
  {
    label: "Premium Quality",
    Icon: BadgeCheck,
    image: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?auto=format&fit=crop&q=80&w=800",
    description: "Strict checks help ensure only export-ready produce reaches shipment."
  },
  {
    label: "Timely Delivery",
    Icon: Truck,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shipping_containers_in_a_port_%28Unsplash%29.jpg/1280px-Shipping_containers_in_a_port_%28Unsplash%29.jpg",
    description: "Coordinated logistics keep schedules clear and shipments dependable."
  },
  {
    label: "Export-Ready Packaging",
    Icon: Boxes,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800",
    description: "Durable, hygienic packaging prepared for international handling."
  },
  {
    label: "Global Reach",
    Icon: Globe2,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
    description: "Serving buyers across key international markets with consistent care."
  },
  {
    label: "Ethical & Sustainable",
    Icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    description: "Responsible sourcing practices shaped around long-term trust."
  }
];

const markets = ["Middle East", "Europe", "USA", "Southeast Asia"];
const productSlides = [...products, ...products];
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navLinks = ["About", "Products", "Markets", "Contact"];
  const dropdownLinks = {
    About: [
      { label: "Company", href: "#about" },
      { label: "Vision", href: "#vision" },
      { label: "Why Choose Us", href: "#why-choose-us" }
    ],
    Products: products.map((product) => ({ label: product.name, href: "#products" })),
    Markets: markets.map((market) => ({ label: market, href: "#markets" }))
  };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 flex min-h-[76px] items-center justify-between gap-6 px-[clamp(18px,4vw,64px)] py-3.5 transition duration-200 ${
        isScrolled || isOpen
          ? "bg-brand-paper/95 text-brand-green shadow-[0_12px_40px_rgba(19,39,26,0.08)] backdrop-blur"
          : "text-white"
      }`}
    >
      <a className="inline-flex min-w-0 items-center gap-3 sm:min-w-[190px]" href="#home" aria-label="Maakamakhya Exports home">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-current font-extrabold sm:h-11 sm:w-11">
          M
        </span>
        <span className="leading-none">
          <strong className="block">Maakamakhya</strong>
          <small className="mt-1 block text-[0.74rem] uppercase tracking-[0.18em]">Exports</small>
        </span>
      </a>

      <button
        className="grid h-11 w-11 place-items-center rounded-full border border-current lg:hidden"
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        className={`absolute left-4 right-4 top-[calc(100%-1px)] flex-col items-stretch gap-4 rounded-lg border border-brand-green/15 bg-brand-paper p-4 font-bold text-brand-green shadow-premium lg:static lg:flex lg:flex-row lg:items-center lg:gap-[clamp(18px,3vw,34px)] lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit lg:shadow-none ${
          isOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        {navLinks.map((link) =>
          dropdownLinks[link] ? (
            <div key={link} className="relative">
              <button
                className="flex w-full items-center justify-between gap-1.5 font-bold lg:w-auto"
                type="button"
                aria-expanded={openMenu === link}
                aria-controls={`${link.toLowerCase()}-menu`}
                onClick={() => setOpenMenu((value) => (value === link ? null : link))}
              >
                {link}
                <ChevronDown className={`transition duration-200 ${openMenu === link ? "rotate-180" : ""}`} size={16} />
              </button>
              <div
                id={`${link.toLowerCase()}-menu`}
                className={`mt-3 grid min-w-[180px] gap-1 rounded-lg border border-brand-green/15 bg-brand-paper p-2 text-brand-green shadow-premium lg:absolute lg:left-1/2 lg:top-full lg:-translate-x-1/2 ${
                  openMenu === link ? "grid" : "hidden"
                }`}
              >
                {dropdownLinks[link].map((item) => (
                  <a
                    key={item.label}
                    className="rounded-md px-3 py-2 hover:bg-brand-earth"
                    href={item.href}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMenus}
            >
              {link}
            </a>
          )
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[100svh] items-center overflow-hidden px-[clamp(20px,5vw,72px)] py-[clamp(96px,12vh,140px)]"
    >
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center"
        style={{ backgroundImage: `url("${heroImage}")` }}
        role="img"
        aria-label="Indian agricultural produce prepared for export"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,35,22,0.86),rgba(12,35,22,0.5)_48%,rgba(12,35,22,0.16)),linear-gradient(0deg,rgba(12,35,22,0.6),rgba(12,35,22,0.04)_45%)]" />
      <div className="relative z-10 max-w-[770px] text-white">
        <p className="eyebrow">Rooted in Tradition, Delivered Worldwide</p>
        <h1 className="display-title mb-5 text-[clamp(3rem,7vw,6.6rem)]">Connecting Indian Quality to Global Markets</h1>
        <p className="mb-7 max-w-2xl text-[clamp(1rem,2vw,1.22rem)] text-white/90">
          We export premium-quality mangoes, cashews, turmeric, and kokam with a commitment to authenticity, freshness, and global
          standards.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="button button-primary w-full sm:w-auto" href="#products">
            <PackageCheck size={18} />
            Explore Products
          </a>
          <a className="button button-secondary w-full sm:w-auto" href="#contact">
            <Send size={18} />
            Send Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, compact = false }) {
  return (
    <div
      className={
        compact
          ? "mb-10 max-w-[760px]"
          : "mx-auto mb-10 grid max-w-[1180px] gap-6 lg:grid-cols-[minmax(160px,0.42fr)_minmax(0,1fr)] lg:gap-[clamp(24px,6vw,72px)]"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,128px)]">
      <SectionHeading eyebrow="About the Company" title="Premium Indian agricultural exports, built on trust." />
      <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.62fr)]">
        <article className="rounded-lg border border-brand-green/15 bg-white/60 p-[clamp(24px,4vw,42px)] shadow-soft">
          <h3 className="mb-2.5 text-lg font-extrabold leading-tight">Who We Are</h3>
          <p className="mb-4 text-brand-muted">
            Maakamakhya Exports is an India-based export company specializing in mangoes, cashews, turmeric, and kokam. The company
            focuses on quality sourcing, authentic products, and dependable international partnerships.
          </p>
          <p className="text-brand-muted">
            The business combines traditional values with modern export standards, ensuring products are selected, packed, and handled
            with care for global customers.
          </p>
        </article>

        <article className="rounded-lg border border-brand-green/15 bg-brand-green p-[clamp(24px,4vw,42px)] text-white shadow-soft">
          <span className="mb-7 inline-grid h-11 w-11 place-items-center rounded-full bg-brand-turmeric text-brand-green">
            <Sparkles size={18} />
          </span>
          <h3 className="mb-2.5 text-lg font-extrabold leading-tight">The Maakamakhya Story</h3>
          <p className="text-white/80">
            The name Maakamakhya was inspired by a meaningful journey to the sacred Kamakhya Temple. A memorable conversation during
            that visit became the foundation for a brand shaped by connection, cultural roots, authenticity, and business values.
          </p>
        </article>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="vision" className="grid gap-12 bg-brand-green px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,128px)] text-white lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.7fr)]">
      <div>
        <p className="eyebrow">Vision</p>
        <h2 className="section-title max-w-[860px]">
          Deliver premium Indian agricultural products worldwide while maintaining freshness and trust.
        </h2>
      </div>
      <div className="grid content-center gap-3.5">
        {missions.map(({ label, Icon }) => (
          <span key={label} className="flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3">
            <Icon size={18} />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-brand-earth px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,128px)]">
      <SectionHeading compact eyebrow="Our Products" title="Natural Indian products selected for international markets." />
      <div className="product-slider overflow-hidden" aria-label="Featured export products">
        <div className="product-slider-track flex w-max gap-[18px]">
          {productSlides.map((product, index) => (
            <article
              key={`${product.name}-${index}`}
              className="w-[min(82vw,412px)] shrink-0 overflow-hidden rounded-lg bg-white shadow-premium md:w-[min(44vw,412px)] xl:w-[calc((100vw-180px)/4)] xl:max-w-[412px]"
              aria-hidden={index >= products.length}
            >
              <img className="aspect-[4/3] w-full object-cover" src={product.image} alt={index < products.length ? product.alt : ""} />
              <div className="p-[22px]">
                <h3 className="mb-2.5 text-lg font-extrabold leading-tight">{product.name}</h3>
                <p className="text-brand-muted">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="overflow-hidden bg-brand-paper px-[clamp(20px,5vw,72px)] py-[clamp(76px,9vw,132px)]">
      <div className="mx-auto max-w-[1420px]">
        <div className="mx-auto mb-[clamp(34px,5vw,58px)] max-w-[900px] text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-brand-turmeric" />
            <p className="mb-0 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-green">
              <Leaf size={18} />
              Why Choose Us
            </p>
            <span className="h-px w-16 bg-brand-turmeric" />
          </div>
          <h2 className="font-serif text-[clamp(2.6rem,5.6vw,5.8rem)] leading-[0.96] text-brand-green">
            Our Strengths. Your <span className="text-brand-turmeric">Advantage.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[clamp(1rem,1.7vw,1.28rem)] leading-relaxed text-brand-ink">
            At Maakamakhya Exports, we combine nature's finest produce with trust, quality, and global standards to deliver excellence
            in every shipment.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {reasons.map(({ label, Icon, image, description }) => (
            <article
              key={label}
              className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-turmeric/70 hover:shadow-premium"
            >
              <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-6 text-center">
                <span className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand-leaf/20 text-brand-green transition duration-300 group-hover:scale-110 group-hover:bg-brand-turmeric group-hover:text-white">
                  <Icon className="transition duration-300 group-hover:-translate-y-0.5" size={32} strokeWidth={1.8} />
                </span>
                <h3 className="font-serif text-[clamp(1.45rem,2vw,1.78rem)] leading-none text-brand-green transition duration-300 group-hover:text-brand-turmeric">
                  {label}
                </h3>
                <span className="my-4 h-0.5 w-10 bg-brand-turmeric transition duration-300 group-hover:w-16" />
                <p className="text-sm leading-relaxed text-brand-ink">{description}</p>
              </div>
              <div className="overflow-hidden">
                <img
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110"
                  src={image}
                  alt={`${label} export strength`}
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function ExportMarkets() {
  return (
    <section id="markets" className="grid items-center gap-[clamp(28px,5vw,72px)] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,128px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.85fr)]">
      <div>
        <img
          className="aspect-[5/4] w-full rounded-lg object-cover shadow-premium"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shipping_containers_in_a_port_%28Unsplash%29.jpg/1280px-Shipping_containers_in_a_port_%28Unsplash%29.jpg"
          alt="Shipping containers at a port for global export"
        />
      </div>
      <div>
        <p className="eyebrow">Export Markets</p>
        <h2 className="section-title">From India to buyers across key global regions.</h2>
        <p className="mb-6 text-brand-muted">
          Maakamakhya Exports is positioned to serve international customers looking for authentic Indian agricultural products with
          consistent quality and responsive trade support.
        </p>
        <div className="flex flex-wrap gap-3">
          {markets.map((market) => (
            <span key={market} className="rounded-full border border-brand-green/15 bg-brand-earth px-3.5 py-2.5 font-extrabold text-brand-green">
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [note, setNote] = useState("Form is ready for integration with email or CRM.");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setNote("Thank you. Your inquiry has been captured for integration.");
  };

  return (
    <section id="contact" className="grid gap-[clamp(28px,5vw,64px)] bg-[#f7f2e8] px-[clamp(20px,5vw,72px)] py-[clamp(72px,9vw,128px)] lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.7fr)]">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Start a product inquiry.</h2>
        <p className="text-brand-muted">
          Share your product requirement, destination market, quantity, and packaging needs. Official phone, email, office address,
          GST, IEC, and certifications can be added when available.
        </p>
        <div className="mt-7 grid gap-3 font-extrabold">
          <span className="flex items-center gap-3">
            <Phone size={18} />
            Phone: To be added
          </span>
          <span className="flex items-center gap-3">
            <Mail size={18} />
            Email: To be added
          </span>
          <span className="flex items-center gap-3">
            <MapPin size={18} />
            Office: India
          </span>
        </div>
      </div>

      <form className="grid gap-4 rounded-lg border border-brand-green/15 bg-white/60 p-[clamp(20px,4vw,34px)] shadow-soft" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-extrabold">
          Name
          <input className="rounded-lg border border-brand-green/20 bg-white px-3.5 py-3 font-normal" type="text" name="name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-extrabold">
          Email
          <input className="rounded-lg border border-brand-green/20 bg-white px-3.5 py-3 font-normal" type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2 text-sm font-extrabold">
          Product Interest
          <select className="rounded-lg border border-brand-green/20 bg-white px-3.5 py-3 font-normal" name="product" required defaultValue="">
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.name}>{product.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-extrabold">
          Message
          <textarea
            className="resize-y rounded-lg border border-brand-green/20 bg-white px-3.5 py-3 font-normal"
            name="message"
            rows="5"
            placeholder="Quantity, destination country, packaging, timeline"
          />
        </label>
        <button className="button button-primary" type="submit">
          <Send size={18} />
          Submit Inquiry
        </button>
        <p className="text-sm text-brand-muted">{note}</p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="grid gap-5 bg-brand-deep px-[clamp(20px,5vw,72px)] py-[30px] text-white/80 md:flex md:justify-between">
      <div>
        <strong>Maakamakhya Exports</strong>
        <p>Premium Indian Agricultural Exports</p>
      </div>
      <p>Natural Quality, Global Reach</p>
      <p className="text-sm text-white/55">Images: Unsplash and Wikimedia Commons contributors.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Products />
        <WhyChooseUs />
        <ExportMarkets />
        <Contact />
      </main>
      <a
        className="fixed bottom-5 right-5 z-10 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f5f] text-white shadow-[0_14px_44px_rgba(18,73,48,0.28)]"
        href="#contact"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <Footer />
    </>
  );
}
