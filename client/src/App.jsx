import React, { useState, useEffect, useRef } from "react";
import {
  Palette,
  Rocket,
  Globe,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Layout,
  Smartphone,
  Github,
  Star,
  Quote,
  Loader2,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Check,
  TrendingUp,
} from "lucide-react";

// --- GLOBAL STYLES & UTILITIES ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    :root {
      --font-heading: 'Space Grotesk', sans-serif;
      --font-body: 'Outfit', sans-serif;
    }

    body {
      font-family: var(--font-body);
      background-color: #020617;
      color: #e2e8f0;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
    }

    .glass-panel {
      background: rgba(15, 23, 42, 0.6);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .glass-panel-hover:hover {
      background: rgba(30, 41, 59, 0.7);
      border-color: rgba(56, 189, 248, 0.3);
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.1);
    }

    /* Grid Background Pattern */
    .bg-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    }

    /* Marquee Animation */
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: inline-flex;
      animation: marquee 40s linear infinite;
    }
    
    /* Text Gradient */
    .text-gradient {
      background: linear-gradient(to right, #38bdf8, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Smooth Scroll */
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

// --- COMPONENT: LOGO ---
const Logo = () => (
  <div className='flex items-center gap-3 group cursor-pointer select-none'>
    <div className='relative w-10 h-10 flex items-center justify-center'>
      {/* Abstract "A" Monogram with Digital Node */}
      <svg
        className='w-full h-full drop-shadow-lg'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='logoGrad'
            x1='5'
            y1='5'
            x2='45'
            y2='45'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#06b6d4' /> {/* cyan-500 */}
            <stop offset='1' stopColor='#3b82f6' /> {/* blue-500 */}
          </linearGradient>
        </defs>
        {/* Main Shape */}
        <path
          d='M25 6L42 38H32L25 24L18 38H8L25 6Z'
          fill='url(#logoGrad)'
          className='transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]'
        />
        {/* Negative Space / Cutout */}
        <path d='M25 32L28 38H22L25 32Z' fill='#020617' />
        {/* Digital "Pulse" Dot */}
        <circle
          cx='25'
          cy='13'
          r='2.5'
          fill='white'
          className='animate-pulse'
        />
      </svg>
    </div>

    <div className='flex flex-col justify-center'>
      <span className='font-heading font-bold text-2xl text-white tracking-wide leading-none group-hover:text-cyan-400 transition-colors'>
        ARCY
      </span>
      <span className='text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase leading-tight group-hover:text-slate-400 transition-colors mt-0.5'>
        Business Solutions
      </span>
    </div>
  </div>
);

// --- COMPONENT: SPOTLIGHT CARD (Wrapper) ---
const SpotlightCard = ({ children, className = "", onClick }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-3xl border border-white/10 bg-slate-900/50 overflow-hidden ${className}`}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56,189,248,0.1), transparent 40%)`,
        }}
      />
      <div className='relative h-full'>{children}</div>
    </div>
  );
};

// --- COMPONENT: NAVBAR ---
const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50 transition-all duration-300 rounded-full border border-white/10 px-6 py-3 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className='flex justify-between items-center md:gap-12'>
          <a href='#home'>
            <Logo />
          </a>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center gap-8'>
            {["Services", "Process", "Work", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-sm font-medium text-slate-400 hover:text-white transition-colors'
              >
                {item}
              </a>
            ))}
          </div>

          <div className='hidden md:block'>
            <a
              href='#contact'
              className='px-5 py-2 bg-white text-slate-950 font-bold text-sm rounded-full hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2'
            >
              Let's Talk <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className='fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden'>
          {["Home", "Services", "Work", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='text-2xl font-heading font-bold text-white hover:text-cyan-400'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-8 right-8 text-slate-500'
          >
            <X size={32} />
          </button>
        </div>
      )}
    </>
  );
};

// --- COMPONENT: HERO ---
const Hero = () => {
  return (
    <section
      id='home'
      className='relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-screen flex items-center'
    >
      {/* Background Grid & Glows */}
      <div className='absolute inset-0 bg-grid opacity-20 pointer-events-none'></div>
      <div className='absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10 text-center'>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 animate-fade-in-up backdrop-blur-sm'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-500'></span>
          </span>
          <span className='text-xs font-semibold text-cyan-400 uppercase tracking-wider'>
            Accepting New Projects for 2026
          </span>
        </div>

        <h1 className='text-5xl md:text-8xl font-heading font-bold text-white mb-6 leading-tight tracking-tight'>
          Sapne <span className='text-gradient'>Local.</span>
          <br />
          Pehchan <span className='text-gradient'>Global.</span>
        </h1>

        <p className='text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light'>
          We build high-performance digital solutions that transform local
          businesses into global brands. Web, Mobile, & Growth Strategy.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='#contact'
            className='px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2'
          >
            Start Your Project
          </a>
          <a
            href='#work'
            className='px-8 py-4 bg-slate-900/50 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-2'
          >
            View Case Studies
          </a>
        </div>

        {/* Floating Abstract UI Elements - Adjusted Positions */}
        <div className='absolute top-1/20 left-1 hidden lg:block animate-bounce duration-[3000ms]'>
          <div className='glass-panel p-4 rounded-2xl flex items-center gap-3'>
            <div className='w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center'>
              <TrendingUp className='text-green-400' size={20} />
            </div>
            <div>
              <p className='text-xs text-slate-400'>Revenue Growth</p>
              <p className='text-sm font-bold text-white'>+125%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: MARQUEE ---
const Marquee = () => {
  const items = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "MOBILE APPS",
    "SEO MASTERY",
    "E-COMMERCE",
    "CLOUD ARCHITECTURE",
    "BRANDING",
    "AUTOMATION",
  ];

  return (
    <div className='border-y border-white/5 bg-slate-900/30 backdrop-blur-sm py-6 overflow-hidden relative z-20'>
      <div className='animate-marquee whitespace-nowrap'>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className='mx-8 text-2xl font-heading font-bold text-transparent stroke-text opacity-40 hover:opacity-100 transition-opacity'
            style={{ WebkitTextStroke: "1px #64748b" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: STATS (NEW) ---
const Stats = () => (
  <section className='py-10 border-b border-white/5 bg-slate-900/20'>
    <div className='max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
      {[
        { label: "Projects Completed", value: "38+" },
        { label: "Happy Clients", value: "35+" },
        { label: "Years Experience", value: "4+" },
        { label: "Support", value: "24/7" },
      ].map((stat, i) => (
        <div key={i}>
          <h4 className='text-3xl md:text-4xl font-bold text-white mb-1'>
            {stat.value}
          </h4>
          <p className='text-slate-500 text-sm uppercase tracking-wider font-semibold'>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// --- COMPONENT: BENTO SERVICES ---
const Services = () => {
  return (
    <section id='services' className='py-32 bg-slate-950 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16'>
          <div>
            <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-4'>
              Our Expertise
            </h2>
            <p className='text-slate-400 max-w-xl'>
              A comprehensive suite of digital services designed to scale your
              business.
            </p>
          </div>
          <button className='hidden md:flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors'>
            See all services <ArrowRight size={18} />
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {/* Service 1: Large */}
          <SpotlightCard className='md:col-span-2 md:row-span-2 p-8 group'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform'>
              <Layout size={32} />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Web Development
            </h3>
            <p className='text-slate-400 leading-relaxed mb-6'>
              We build lightning-fast, SEO-optimized websites using React,
              Next.js, and Node.js. From corporate sites to complex web apps, we
              ensure scalability and performance.
            </p>
            <ul className='grid grid-cols-2 gap-2'>
              {[
                "React/Next.js",
                "Performance Optimization",
                "CMS Integration",
                "PWA",
              ].map((tag) => (
                <li
                  key={tag}
                  className='flex items-center gap-2 text-sm text-slate-500'
                >
                  <CheckCircle size={14} className='text-blue-500' /> {tag}
                </li>
              ))}
            </ul>
          </SpotlightCard>

          {/* Service 2: Tall */}
          <SpotlightCard className='md:col-span-1 md:row-span-2 p-8 group bg-gradient-to-b from-slate-900 to-slate-800 border-none'>
            <div className='w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400 group-hover:rotate-12 transition-transform'>
              <Smartphone size={28} />
            </div>
            <h3 className='text-xl font-bold text-white mb-4'>App Dev</h3>
            <p className='text-slate-400 text-sm mb-6'>
              Native and Cross-platform mobile applications for iOS and Android.
            </p>
            <div className='mt-auto'>
              <div className='w-full h-32 bg-slate-950/50 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative'>
                <Smartphone
                  className='absolute -bottom-4 text-slate-800'
                  size={100}
                />
              </div>
            </div>
          </SpotlightCard>

          {/* Service 3: Standard */}
          <SpotlightCard className='md:col-span-1 p-8 group'>
            <div className='w-12 h-12 rounded-2xl bg-cyan-600/20 flex items-center justify-center mb-6 text-cyan-400'>
              <Rocket size={28} />
            </div>
            <h3 className='text-xl font-bold text-white mb-2'>SEO & Growth</h3>
            <p className='text-slate-400 text-sm'>
              Rank #1 on Google and dominate your local market.
            </p>
          </SpotlightCard>

          {/* Service 4: Standard */}
          <SpotlightCard className='md:col-span-1 p-8 group'>
            <div className='w-12 h-12 rounded-2xl bg-pink-600/20 flex items-center justify-center mb-6 text-pink-400'>
              <Palette size={28} />
            </div>
            <h3 className='text-xl font-bold text-white mb-2'>UI/UX Design</h3>
            <p className='text-slate-400 text-sm'>
              Interfaces that convert visitors into loyal customers.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: PROCESS ---
const Process = () => {
  return (
    <section id='process' className='py-24 bg-black relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-50 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-4'>
            How We Work
          </h2>
          <p className='text-slate-400'>
            From concept to deployment in 4 simple steps.
          </p>
        </div>

        <div className='relative'>
          {/* Connecting Line (Desktop) */}
          <div className='hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-1/2'></div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Understanding your goals.",
              },
              { num: "02", title: "Strategy", desc: "Blueprint & Design." },
              { num: "03", title: "Build", desc: "Development & Testing." },
              { num: "04", title: "Launch", desc: "Deployment & Growth." },
            ].map((step, index) => (
              <div
                key={index}
                className='relative bg-slate-900 border border-white/10 p-6 rounded-2xl text-center z-10 hover:-translate-y-2 transition-transform duration-300 shadow-xl'
              >
                <div className='w-12 h-12 bg-slate-800 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-bold mx-auto mb-4'>
                  {step.num}
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {step.title}
                </h3>
                <p className='text-slate-400 text-sm'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: WORK ---
const ProjectCard = ({ title, category, image, tags }) => (
  <div className='group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3]'>
    <div
      className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity'></div>

    <div className='absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
      <div className='flex justify-between items-end'>
        <div>
          <span className='text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 block'>
            {category}
          </span>
          <h3 className='text-2xl font-bold text-white mb-3 font-heading'>
            {title}
          </h3>
          <div className='flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-[10px] px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-75 transform translate-y-4 group-hover:translate-y-0'>
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <section id='work' className='py-32 bg-slate-950'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-6'>
            Featured Projects
          </h2>
          <p className='text-slate-400 max-w-2xl mx-auto'>
            We don't just write code; we build digital assets that drive
            revenue.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <ProjectCard
            title='Nova E-Commerce'
            category='Retail & Shopping'
            image='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            tags={["React", "Shopify API", "Tailwind"]}
          />
          <ProjectCard
            title='Zenith Fitness'
            category='Health & Wellness'
            image='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            tags={["Next.js", "Booking System", "Stripe"]}
          />
          <ProjectCard
            title='Neon Realty 3D'
            category='Real Estate'
            image='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            tags={["Three.js", "React", "MongoDB"]}
          />
          <ProjectCard
            title='Arcane Finance'
            category='Fintech'
            image='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
            tags={["Dashboard", "Data Viz", "Secure"]}
          />
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: TESTIMONIALS (NEW) ---
const Testimonials = () => {
  const reviews = [
    {
      name: "Aditya Malhotra",
      role: "Director, GreenLeaf Organics",
      text: "Arcy Digital transformed our local business into a recognized brand. Our online orders from Tier-1 cities increased by 200%.",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Sneha Reddy",
      role: "Co-Founder, Zest Fashion",
      text: "The technical expertise Rahul and Chirag bring is unmatched. They built a custom inventory system that saved us lakhs in management costs.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Vikram Singh",
      role: "CEO, RapidLogistics",
      text: "Incredible design eye. They perfectly captured our corporate vision while keeping the website lightning fast for mobile users.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className='py-24 bg-slate-950 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none'></div>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <h2 className='text-4xl font-heading font-bold text-center text-white mb-16'>
          Trusted by Founders
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reviews.map((review, i) => (
            <div
              key={i}
              className='glass-panel p-8 rounded-2xl relative border-white/5 hover:border-cyan-500/20 transition-all'
            >
              <Quote
                className='absolute top-8 right-8 text-white/10'
                size={48}
              />
              <div className='flex items-center gap-4 mb-6'>
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-12 h-12 rounded-full border-2 border-cyan-500/30'
                />
                <div>
                  <h4 className='text-white font-bold'>{review.name}</h4>
                  <p className='text-slate-500 text-xs'>{review.role}</p>
                </div>
              </div>
              <p className='text-slate-300 leading-relaxed relative z-10 text-sm mb-4'>
                "{review.text}"
              </p>
              <div className='flex gap-1 text-yellow-500'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill='currentColor' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: PRICING ---
const PricingCard = ({ title, price, features, recommended, color }) => (
  <div
    className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-300 hover:-translate-y-2 ${
      recommended
        ? "bg-slate-900 border-cyan-500/50 shadow-2xl shadow-cyan-900/20"
        : "bg-slate-950/50 border-white/5 hover:border-white/10"
    }`}
  >
    {recommended && (
      <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg'>
        Most Popular
      </div>
    )}
    <div className='mb-6'>
      <h3 className={`text-lg font-bold ${color} font-heading mb-2`}>
        {title}
      </h3>
      <div className='flex items-baseline gap-1'>
        <span className='text-4xl font-bold text-white'>{price}</span>
        {price !== "Custom" && (
          <span className='text-slate-500 text-sm font-medium'>/starting</span>
        )}
      </div>
    </div>

    <div className='w-full h-px bg-white/5 mb-6'></div>

    <ul className='space-y-4 mb-8 flex-1'>
      {features.map((feat, i) => (
        <li key={i} className='flex items-start gap-3 text-sm text-slate-300'>
          <Check
            size={16}
            className={`mt-0.5 ${
              recommended ? "text-cyan-400" : "text-slate-500"
            }`}
          />
          <span className='leading-tight'>{feat}</span>
        </li>
      ))}
    </ul>

    <a
      href='#contact'
      className={`w-full py-4 rounded-xl font-bold text-center text-sm transition-all ${
        recommended
          ? "bg-white text-slate-900 hover:bg-cyan-50"
          : "bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      Choose Plan
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id='pricing' className='py-32 bg-black relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-4'>
            Transparent Pricing
          </h2>
          <p className='text-slate-400'>
            Invest in your business with clear, upfront packages.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <PricingCard
            title='Starter'
            price='₹8,499'
            color='text-slate-400'
            features={[
              "Landing Page (One Page)",
              "Mobile Responsive Design",
              "Contact Form Integration",
              "Basic SEO Setup",
              "1 Month Support",
            ]}
          />
          <PricingCard
            title='Growth'
            price='₹15,499'
            color='text-cyan-400'
            features={[
              "Multi-page Website (5 Pages)",
              "CMS (Easy content updates)",
              "Advanced SEO & Analytics",
              "WhatsApp/Social Chat",
              "3 Months Priority Support",
            ]}
            recommended={true}
          />
          <PricingCard
            title='Enterprise'
            price='Custom'
            color='text-purple-400'
            features={[
              "Full Stack Web Application",
              "E-commerce & Payments",
              "User Authentication",
              "Custom Database Design",
              "1 Year Maintenance",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: FAQ (NEW) ---
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Simple websites take 2-3 weeks, while complex web apps can take 8-12 weeks. We ensure timely delivery.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, every project comes with 1 year of free support. We also offer annual maintenance contracts (AMC).",
    },
    {
      q: "What are the payment modes?",
      a: "We accept UPI, NEFT/RTGS, and Netbanking. We work on a 50% advance and 50% completion model. GST invoices are provided.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. With 80% of Indian users on mobile, we design with a strict 'mobile-first' approach.",
    },
  ];

  return (
    <section className='py-24 bg-slate-950'>
      <div className='max-w-3xl mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className='border border-white/10 rounded-2xl bg-slate-900/30 overflow-hidden'
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className='w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors'
              >
                <span className='font-bold text-white'>{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className='text-cyan-400' />
                ) : (
                  <ChevronDown className='text-slate-500' />
                )}
              </button>
              <div
                className={`px-6 text-slate-400 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: TEAM ---
const Team = () => (
  <section id='team' className='py-24 bg-slate-950'>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl font-heading font-bold text-white mb-6'>
            Meet the <span className='text-gradient'>Minds.</span>
          </h2>
          <p className='text-slate-400 text-lg leading-relaxed mb-8'>
            We are a duo of passionate developers and strategists committed to
            bringing high-quality digital solutions to businesses of all sizes.
          </p>
          <div className='flex gap-4'>
            <div className='flex -space-x-4'>
              <div className='w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-white font-bold'>
                RD
              </div>
              <div className='w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-white font-bold'>
                CB
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-white font-bold text-sm'>Rahul & Chirag</p>
              <p className='text-slate-500 text-xs'>Co-Founders</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Rahul Card */}
          <div className='bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group'>
            <div className='mb-4'>
              <h3 className='text-xl font-bold text-white'>Rahul Dhakad</h3>
              <p className='text-cyan-400 text-sm'>Tech Lead</p>
            </div>
            <p className='text-slate-400 text-sm mb-4'>
              Master of the MERN stack. Turns complex logic into seamless code.
            </p>
            <div className='flex gap-3'>
              <a
                href='https://github.com/githubRahuld'
                target='_blank'
                className='text-slate-500 hover:text-white transition-colors'
              >
                <Github size={18} />
              </a>
              <a
                href='https://www.linkedin.com/in/rahuldhakad201/'
                target='_blank'
                className='text-slate-500 hover:text-white transition-colors'
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Chirag Card */}
          <div className='bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-purple-500/30 transition-all group '>
            <div className='mb-4'>
              <h3 className='text-xl font-bold text-white'>Chirag Bhargava</h3>
              <p className='text-purple-400 text-sm'>Strategy & Sales</p>
            </div>
            <p className='text-slate-400 text-sm mb-4'>
              Visionary strategist ensuring product-market fit and growth.
            </p>
            <div className='flex gap-3'>
              <a
                href='#'
                className='text-slate-500 hover:text-white transition-colors'
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENT: CONTACT ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Mock API Call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id='contact' className='py-32 bg-black relative overflow-hidden'>
      {/* Glow Effects */}
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none'></div>

      <div className='max-w-4xl mx-auto px-6 relative z-10'>
        <div className='glass-panel p-8 md:p-12 rounded-3xl border border-white/10 text-center'>
          <h2 className='text-3xl md:text-5xl font-heading font-bold text-white mb-6'>
            Ready to Scale?
          </h2>
          <p className='text-slate-400 mb-10 max-w-lg mx-auto'>
            Leave your details and we will schedule a free strategy call to
            discuss your digital future.
          </p>

          {status === "success" ? (
            <div className='bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex flex-col items-center animate-fade-in'>
              <CheckCircle className='text-green-500 mb-2' size={32} />
              <h3 className='text-white font-bold text-xl'>Message Sent!</h3>
              <p className='text-slate-400 text-sm'>
                We'll be in touch shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className='mt-4 text-green-400 text-sm hover:underline'
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='space-y-4 max-w-md mx-auto'
            >
              <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                type='text'
                placeholder='Your Name'
                required
                className='w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all'
              />
              <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                type='email'
                placeholder='Your Email'
                required
                className='w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all'
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                placeholder='Tell us about your project'
                required
                className='w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-all resize-none'
              ></textarea>

              <button
                type='submit'
                disabled={status === "submitting"}
                className='w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 flex justify-center items-center gap-2'
              >
                {status === "submitting" ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: FOOTER ---
const Footer = () => (
  <footer className='bg-slate-950 border-t border-white/10 pt-20 pb-10'>
    <div className='max-w-7xl mx-auto px-6'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
        <div className='md:col-span-1'>
          <Logo />
          <p className='text-slate-500 mt-6 text-sm leading-relaxed'>
            Transforming local businesses into global brands through
            high-performance Full Stack architecture and futuristic design.
          </p>
        </div>

        <div>
          <h4 className='text-white font-bold mb-6'>Menu</h4>
          <ul className='space-y-4 text-sm text-slate-400'>
            <li>
              <a href='#home' className='hover:text-cyan-400 transition-colors'>
                Home
              </a>
            </li>
            <li>
              <a
                href='#services'
                className='hover:text-cyan-400 transition-colors'
              >
                Services
              </a>
            </li>
            <li>
              <a href='#work' className='hover:text-cyan-400 transition-colors'>
                Work
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-cyan-400 transition-colors'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-white font-bold mb-6'>Socials</h4>
          <ul className='space-y-4 text-sm text-slate-400'>
            <li>
              <a
                href='https://linkedin.com'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://github.com'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com'
                target='_blank'
                className='hover:text-cyan-400 transition-colors'
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-white font-bold mb-6'>Contact</h4>
          <ul className='space-y-4 text-sm text-slate-400'>
            <li className='flex items-start gap-3'>
              <MapPin size={18} className='text-cyan-400 shrink-0 mt-0.5' />
              <span>
                101, Crystal IT Park,
                <br />
                Indore, Madhya Pradesh,
                <br />
                India - 452001
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <Mail size={18} className='text-cyan-400 shrink-0' />
              <a
                href='mailto: rahuldhakad201.rd@gmail.com'
                className='hover:text-white transition-colors'
              >
                rahuldhakad201.rd@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <Phone size={18} className='text-cyan-400 shrink-0' />
              <a
                href='tel:+919131279165'
                className='hover:text-white transition-colors'
              >
                +91 9131279165
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='border-t border-white/10 pt-8 pb-8 mb-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-center md:text-left'>
          <h5 className='text-white font-bold mb-1'>
            Subscribe to our newsletter
          </h5>
          <p className='text-slate-500 text-sm'>
            Get the latest trends in digital growth.
          </p>
        </div>
        <div className='flex gap-2 w-full md:w-auto'>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-slate-900 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 w-full md:w-64'
          />
          <button className='bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm px-6 py-2 rounded-lg transition-colors'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600'>
        <p>© 2026 Arcy Digital. All rights reserved.</p>
        <div className='flex gap-6'>
          <a href='#' className='hover:text-white transition-colors'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-white transition-colors'>
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='bg-black min-h-screen text-slate-200 selection:bg-cyan-500/30'>
      <GlobalStyles />
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
