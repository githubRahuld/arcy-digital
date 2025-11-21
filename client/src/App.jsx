import React, { useState, useEffect } from "react";
import {
  Code,
  Palette,
  Rocket,
  Globe,
  Cpu,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Database,
  Server,
  Layout,
  Smartphone,
  ExternalLink,
  Github,
  Star,
  Quote,
  AlertCircle,
  Loader2,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";

// --- GLOBAL STYLES FOR ANIMATIONS ---
const GlobalStyles = () => (
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: inline-flex;
      animation: marquee 30s linear infinite;
    }
    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    .group:hover .animate-scan {
      animation: scan 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  `}</style>
);

// --- COMPONENT: LOGO (NEW ANIMATED VERSION) ---
const Logo = () => (
  <div className='flex items-center gap-3 group cursor-pointer select-none'>
    {/* Icon Container */}
    <div className='relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden'>
      {/* Background overlay */}
      <div className='absolute inset-0 bg-black/10'></div>

      {/* The Animated RC Icon - Replaces Code Icon */}
      <div className='relative z-10 flex items-center justify-center font-orbitron font-black text-white text-sm tracking-tighter leading-none group-hover:scale-110 transition-transform duration-300'>
        <span className='group-hover:-translate-x-[1px] transition-transform duration-300'>
          R
        </span>
        <span className='text-cyan-100 group-hover:translate-x-[1px] transition-transform duration-300'>
          C
        </span>
      </div>

      {/* Scanline Animation Effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent -translate-y-full animate-scan'></div>
    </div>

    {/* Text Container */}
    <div className='flex flex-col justify-center'>
      <h1 className='font-orbitron font-bold text-2xl text-white tracking-widest leading-none group-hover:text-cyan-50 transition-colors'>
        ARCY
      </h1>
      <div className='flex items-center gap-1'>
        <span className='h-[2px] w-0 group-hover:w-2 bg-cyan-400 rounded-full transition-all duration-300'></span>
        <span className='text-[0.6rem] font-bold text-cyan-400 uppercase tracking-[0.3em] leading-none -mt-0.5 group-hover:tracking-[0.4em] transition-all duration-300'>
          Digital
        </span>
      </div>
    </div>
  </div>
);

// --- COMPONENT: NAVBAR ---
const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-lg border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        {/* Use The New Logo Component */}
        <a href='#home'>
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-8'>
          {["Services", "Work", "Process", "Pricing", "Team"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors'
            >
              {item}
            </a>
          ))}
          <a
            href='https://calendly.com'
            target='_blank'
            rel='noopener noreferrer'
            className='px-5 py-2 bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 text-white text-sm rounded-full transition-all duration-300 flex items-center gap-2'
          >
            <Calendar size={14} />
            Book Call
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl'>
          {[
            "Home",
            "Services",
            "Work",
            "Process",
            "Pricing",
            "Team",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='text-lg font-medium text-slate-300 hover:text-cyan-400'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- COMPONENT: HERO ---
const Hero = () => {
  return (
    <section
      id='home'
      className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden'
    >
      {/* Background Blobs */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-700'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10 text-center'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 animate-fade-in-up'>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
          </span>
          <span className='text-xs font-medium text-slate-300'>
            Accepting New Projects
          </span>
        </div>

        <h1 className='text-5xl md:text-7xl font-black text-white font-orbitron tracking-tight mb-6 leading-tight'>
          Sapne{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>
            Local.
          </span>
          <br />
          Pehchan{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500'>
            Global.
          </span>
        </h1>

        <p className='text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed'>
          We help local businesses transform into global brands using
          cutting-edge Full Stack technology and futuristic design.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='https://calendly.com'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2'
          >
            <Calendar size={18} />
            Book Strategy Call
          </a>
          <a
            href='#work'
            className='px-8 py-4 bg-slate-800 text-white font-medium rounded-full border border-slate-700 hover:bg-slate-700 transition-all'
          >
            View Portfolio
          </a>
        </div>

        {/* Tech Stack Strip */}
        <div className='mt-20 pt-10 border-t border-white/5'>
          <p className='text-sm text-slate-500 mb-6 uppercase tracking-widest'>
            Powered by Full Stack Technologies
          </p>
          <div className='flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
            <div className='flex items-center gap-2'>
              <Database className='text-green-500' />{" "}
              <span className='text-slate-300 font-bold'>Database</span>
            </div>
            <div className='flex items-center gap-2'>
              <Server className='text-gray-400' />{" "}
              <span className='text-slate-300 font-bold'>Backend</span>
            </div>
            <div className='flex items-center gap-2'>
              <Code className='text-cyan-400' />{" "}
              <span className='text-slate-300 font-bold'>Frontend</span>
            </div>
            <div className='flex items-center gap-2'>
              <Cpu className='text-green-600' />{" "}
              <span className='text-slate-300 font-bold'>Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: INFINITE MARQUEE ---
const Marquee = () => {
  const items = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "FULL STACK",
    "SEO GROWTH",
    "APP DEVELOPMENT",
    "BRAND STRATEGY",
    "CLOUD SOLUTIONS",
    "E-COMMERCE",
  ];

  return (
    <div className='bg-slate-900 border-y border-white/5 py-4 overflow-hidden relative z-20'>
      <div className='animate-marquee whitespace-nowrap'>
        {/* Duplicated list for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className='mx-8 text-sm font-bold text-slate-500 tracking-widest font-orbitron flex items-center gap-8'
          >
            {item}
            <span className='w-1 h-1 bg-cyan-500 rounded-full'></span>
          </span>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT: SERVICES ---
const ServiceCard = ({ icon: Icon, title, desc, gradient }) => (
  <div className='group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/50 hover:to-blue-600/50 transition-all duration-500'>
    <div className='bg-slate-900 h-full p-8 rounded-xl relative overflow-hidden'>
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700`}
      ></div>
      <div className='w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
        <Icon className='text-white' size={24} />
      </div>
      <h3 className='text-xl font-bold text-white mb-3 font-orbitron'>
        {title}
      </h3>
      <p className='text-slate-400 leading-relaxed mb-6 text-sm'>{desc}</p>
      <div className='flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-4 transition-all'>
        <span>Learn more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id='services' className='py-24 bg-slate-950 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-4'>
            Our Expertise
          </h2>
          <p className='text-slate-400 max-w-xl mx-auto'>
            Full-cycle digital solutions tailored for local businesses ready to
            scale.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <ServiceCard
            icon={Layout}
            title='Web Development'
            desc='High-performance websites built on robust Full Stack architecture. Fast, SEO-friendly, and ready for growth.'
            gradient='from-cyan-400 to-blue-500'
          />
          <ServiceCard
            icon={Palette}
            title='UI/UX Design'
            desc='Modern, futuristic interfaces that capture attention and convert visitors into loyal customers.'
            gradient='from-purple-400 to-pink-500'
          />
          <ServiceCard
            icon={Rocket}
            title='Digital Growth'
            desc='SEO, Local Business Listing, and integration strategies to put your shop on the digital map.'
            gradient='from-emerald-400 to-green-500'
          />
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: PROCESS TIMELINE ---
const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your business goals and target audience.",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "We blueprint the technical architecture and design system.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Our Full Stack team builds your robust digital solution.",
    },
    {
      num: "04",
      title: "Launch & Scale",
      desc: "We deploy, optimize, and help you grow traffic.",
    },
  ];

  return (
    <section id='process' className='py-24 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row gap-16'>
          <div className='md:w-1/3'>
            <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-6'>
              How We Work
            </h2>
            <p className='text-slate-400 mb-8'>
              We believe in transparency. Here is our 4-step process to taking
              your business from local to global.
            </p>
            <a
              href='#contact'
              className='text-cyan-400 font-medium flex items-center gap-2 hover:gap-4 transition-all'
            >
              Start your project <ArrowRight size={18} />
            </a>
          </div>

          <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {steps.map((step) => (
              <div
                key={step.num}
                className='bg-slate-950 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group'
              >
                <div className='text-5xl font-black text-slate-800 mb-4 font-orbitron group-hover:text-cyan-500/20 transition-colors'>
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
  <div className='group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800'>
    <div
      className={`h-64 w-full ${image} bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100`}
    ></div>
    <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end p-8'>
      <span className='text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2'>
        {category}
      </span>
      <h3 className='text-2xl font-bold text-white mb-3 font-orbitron'>
        {title}
      </h3>
      <div className='flex flex-wrap gap-2 mb-6'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='text-[10px] px-2 py-1 rounded bg-white/10 text-slate-300 border border-white/5'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <section id='work' className='py-24 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
          <div>
            <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-4'>
              Featured Projects
            </h2>
            <p className='text-slate-400'>
              Proving our potential with scalable, modern applications.
            </p>
          </div>
          <button className='text-cyan-400 font-medium hover:text-white transition-colors'>
            View all projects &rarr;
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <ProjectCard
            title='Nova E-Commerce'
            category='Retail & Shopping'
            image='bg-gradient-to-br from-indigo-900 to-blue-800'
            tags={["React", "Redux", "Node.js", "Stripe"]}
          />
          <ProjectCard
            title='Zenith Fitness App'
            category='Health & Services'
            image='bg-gradient-to-br from-emerald-900 to-green-800'
            tags={["Full Stack", "Booking System", "Real-time"]}
          />
          <ProjectCard
            title='Neon Realty 3D'
            category='Real Estate'
            image='bg-gradient-to-br from-purple-900 to-fuchsia-800'
            tags={["React", "Three.js", "MongoDB", "MapBox"]}
          />
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: PRICING ---
const PricingCard = ({ title, price, features, recommended }) => (
  <div
    className={`relative p-8 rounded-3xl border ${
      recommended
        ? "bg-slate-900 border-cyan-500/50 shadow-2xl shadow-cyan-500/10"
        : "bg-slate-950 border-white/5"
    } flex flex-col`}
  >
    {recommended && (
      <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest'>
        Most Popular
      </div>
    )}
    <h3 className='text-lg font-bold text-white font-orbitron mb-2'>{title}</h3>
    <div className='mb-6'>
      <span className='text-4xl font-bold text-white'>{price}</span>
      <span className='text-slate-500 text-sm'> / project</span>
    </div>
    <ul className='space-y-4 mb-8 flex-1'>
      {features.map((feat, i) => (
        <li key={i} className='flex items-center gap-3 text-sm text-slate-300'>
          <Check size={16} className='text-cyan-400' /> {feat}
        </li>
      ))}
    </ul>
    <a
      href='#contact'
      className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
        recommended
          ? "bg-cyan-500 text-white hover:bg-cyan-600"
          : "bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      Choose Plan
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id='pricing' className='py-24 bg-slate-950 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-4'>
            Simple Pricing
          </h2>
          <p className='text-slate-400'>
            Transparent packages for businesses of all sizes.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <PricingCard
            title='Starter'
            price='₹5,000*'
            features={[
              "Landing Page (One Page)",
              "Mobile Responsive",
              "Contact Form",
              "Basic SEO",
              "6 Month Support",
            ]}
          />
          <PricingCard
            title='Growth'
            price='₹10,000*'
            features={[
              "Multi-page Website (5 Pages)",
              "CMS Integration",
              "Advanced SEO & Analytics",
              "Social Media Integration",
              "12 Months Support",
            ]}
            recommended={true}
          />
          <PricingCard
            title='Enterprise'
            price='Custom'
            features={[
              "Full Stack Web Application",
              "E-commerce / Payment Gateway",
              "User Authentication",
              "Custom Database",
              "Priority Support",
            ]}
          />
        </div>
        <p className='text-center text-slate-600 text-xs mt-8'>
          *Prices are indicative and may vary based on requirements.
        </p>
      </div>
    </section>
  );
};

// --- COMPONENT: TEAM ---
const Team = () => {
  return (
    <section id='team' className='py-24 bg-slate-950 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-6'>
            Meet The{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>
              Minds
            </span>
          </h2>
          <p className='text-slate-400 max-w-2xl mx-auto text-lg'>
            The strategic duo bridging the gap between complex technology and
            business growth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Rahul */}
          <div className='group relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative h-full bg-slate-900 ring-1 ring-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center overflow-hidden'>
              <div className='w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 p-1 ring-4 ring-slate-800 group-hover:ring-cyan-500/50 transition-all duration-500 relative'>
                <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden'>
                  <Code size={40} className='text-cyan-400' />
                </div>
              </div>
              <h3 className='text-3xl font-bold text-white font-orbitron mb-2'>
                Rahul Dhakad
              </h3>
              <p className='text-cyan-400 font-medium tracking-wider text-sm uppercase mb-6'>
                Founder & Tech Lead
              </p>
              <p className='text-slate-300 leading-relaxed mb-8'>
                The architect behind the code. Specialist in Full Stack
                architecture, scalable backends, and turning logic into
                high-performance digital assets.
              </p>
              <div className='flex flex-wrap justify-center gap-2 mb-8'>
                {["Full Stack", "System Arch", "Cloud", "Security"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className='px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700'
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className='flex gap-6 mt-auto'>
                <a
                  href='https://github.com/githubRahuld'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-white hover:scale-110 transition-all'
                >
                  <Github size={24} />
                </a>
                <a
                  href='https://www.linkedin.com/in/rahuldhakad201/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-blue-400 hover:scale-110 transition-all'
                >
                  <Globe size={24} />
                </a>
                <a
                  href='https://my-portfolio-three-smoky-14.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all'
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Chirag */}
          <div className='group relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative h-full bg-slate-900 ring-1 ring-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center overflow-hidden'>
              <div className='w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 p-1 ring-4 ring-slate-800 group-hover:ring-purple-500/50 transition-all duration-500 relative'>
                <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden'>
                  <MessageSquare size={40} className='text-purple-400' />
                </div>
              </div>
              <h3 className='text-3xl font-bold text-white font-orbitron mb-2'>
                Chirag
              </h3>
              <p className='text-purple-400 font-medium tracking-wider text-sm uppercase mb-6'>
                Head of Sales & Strategy
              </p>
              <p className='text-slate-300 leading-relaxed mb-8'>
                The visionary behind the growth. Expert in translating client
                needs into technical requirements and ensuring market fit for
                every product we build.
              </p>
              <div className='flex flex-wrap justify-center gap-2 mb-8'>
                {["Strategy", "UI/UX Logic", "Client Relations", "Growth"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className='px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700'
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className='flex gap-6 mt-auto'>
                <a
                  href='#'
                  className='text-slate-400 hover:text-white hover:scale-110 transition-all'
                >
                  <Github size={24} />
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-purple-400 hover:scale-110 transition-all'
                >
                  <Globe size={24} />
                </a>
                <a
                  href='#'
                  className='text-slate-400 hover:text-pink-400 hover:scale-110 transition-all'
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id='testimonials' className='py-24 bg-slate-950'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-4'>
            Client Stories
          </h2>
          <p className='text-slate-400'>
            Don't just take our word for it. Hear from our partners.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-slate-900/50 border border-white/5 p-8 rounded-2xl relative hover:border-cyan-500/30 transition-all duration-300'>
            <Quote
              className='text-cyan-500/20 absolute top-6 right-6'
              size={48}
            />
            <div className='flex gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className='text-yellow-500 fill-yellow-500'
                />
              ))}
            </div>
            <p className='text-slate-300 italic mb-6 leading-relaxed relative z-10'>
              "Arcy Digital completely transformed how we do business. We went
              from 0 online sales to receiving orders daily within a month."
            </p>
            <div>
              <h4 className='text-white font-bold font-orbitron'>
                Rajesh Gupta
              </h4>
              <p className='text-xs text-cyan-400 uppercase tracking-widest'>
                Owner, Gupta Electronics
              </p>
            </div>
          </div>
          <div className='bg-slate-900/50 border border-white/5 p-8 rounded-2xl relative hover:border-cyan-500/30 transition-all duration-300'>
            <Quote
              className='text-cyan-500/20 absolute top-6 right-6'
              size={48}
            />
            <div className='flex gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className='text-yellow-500 fill-yellow-500'
                />
              ))}
            </div>
            <p className='text-slate-300 italic mb-6 leading-relaxed relative z-10'>
              "The designs are futuristic yet so easy to use. Rahul and Chirag
              really understood our vision for a modern brand."
            </p>
            <div>
              <h4 className='text-white font-bold font-orbitron'>
                Priya Sharma
              </h4>
              <p className='text-xs text-cyan-400 uppercase tracking-widest'>
                Founder, Zen Yoga Studio
              </p>
            </div>
          </div>
          <div className='bg-slate-900/50 border border-white/5 p-8 rounded-2xl relative hover:border-cyan-500/30 transition-all duration-300'>
            <Quote
              className='text-cyan-500/20 absolute top-6 right-6'
              size={48}
            />
            <div className='flex gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className='text-yellow-500 fill-yellow-500'
                />
              ))}
            </div>
            <p className='text-slate-300 italic mb-6 leading-relaxed relative z-10'>
              "Fast, professional, and reliable. The custom inventory system
              they built saved us hours of manual work every week."
            </p>
            <div>
              <h4 className='text-white font-bold font-orbitron'>Amit Verma</h4>
              <p className='text-xs text-cyan-400 uppercase tracking-widest'>
                Manager, Verma Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT: FAQ ---
const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className='border-b border-white/10'>
    <button
      onClick={toggle}
      className='w-full py-6 flex justify-between items-center text-left hover:text-cyan-400 transition-colors'
    >
      <span className='text-lg font-bold text-white font-orbitron'>
        {question}
      </span>
      {isOpen ? (
        <ChevronUp size={20} className='text-cyan-400' />
      ) : (
        <ChevronDown size={20} className='text-slate-500' />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-48 opacity-100 mb-6" : "max-h-0 opacity-0"
      }`}
    >
      <p className='text-slate-400 leading-relaxed'>{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "A standard business website typically takes 1-2 weeks, while custom Full Stack applications can take 3-4 weeks depending on complexity.",
    },
    {
      q: "Do you provide hosting and domain?",
      a: "Yes, we guide you through purchasing your domain and we can handle secure cloud hosting for you to ensure maximum speed and uptime.",
    },
    {
      q: "Will my website work on mobile?",
      a: "Absolutely. We practice 'Mobile-First' design, ensuring your site looks perfect on phones, tablets, and desktops.",
    },
    {
      q: "What is your payment structure?",
      a: "We typically require a 50% deposit to begin the strategy & design phase, with the remaining 50% due upon successful launch.",
    },
  ];

  return (
    <section id='faq' className='py-24 bg-slate-900'>
      <div className='max-w-3xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-white font-orbitron mb-4'>
            Common Questions
          </h2>
          <p className='text-slate-400'>
            Everything you need to know before we start.
          </p>
        </div>
        <div className='bg-slate-950 rounded-3xl p-8 border border-white/5'>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: CONTACT FORM ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id='contact'
      className='py-24 bg-slate-900 relative overflow-hidden'
    >
      <div className='max-w-3xl mx-auto px-6 relative z-10'>
        <div className='bg-slate-950/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-white font-orbitron mb-4'>
              Ready to Scale?
            </h2>
            <p className='text-slate-400'>
              Tell us about your project. We'll build the future together.
            </p>
          </div>

          {status === "success" ? (
            <div className='bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-fade-in'>
              <div className='w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle className='text-emerald-500' size={32} />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Message Sent!
              </h3>
              <p className='text-slate-300'>
                Thanks for reaching out. We will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className='mt-6 text-emerald-400 hover:text-emerald-300 font-medium text-sm'
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  type='text'
                  placeholder='Name'
                  className='w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors'
                  required
                />
                <input
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  type='email'
                  placeholder='Email'
                  className='w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors'
                  required
                />
              </div>
              <input
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                type='text'
                placeholder='Business Type / Subject'
                className='w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors'
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                placeholder='Project Details'
                className='w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors'
                required
              ></textarea>
              <button
                type='submit'
                disabled={status === "submitting"}
                className='w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2'
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className='animate-spin' size={20} /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {status === "error" && (
                <div className='flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20'>
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: FOOTER ---
const Footer = () => (
  <footer className='bg-slate-950 border-t border-white/10 pt-20 pb-10 relative overflow-hidden'>
    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none'>
      <div className='absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]'></div>
      <div className='absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]'></div>
    </div>

    <div className='max-w-7xl mx-auto px-6 relative z-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
        {/* NEW ANIMATED VIDEO LOGO IN FOOTER - FIXED SIZE & FIT */}
        <div className='col-span-1 md:col-span-2'>
          <div className='flex items-center gap-2 mb-6'>
            {/* Use The New Logo Component */}
            <a href='#home'>
              <Logo />
            </a>
          </div>
          <p className='text-slate-400 leading-relaxed max-w-sm mb-8'>
            Transforming local businesses into global brands through
            high-performance Full Stack architecture and futuristic design.
          </p>
          <div className='flex gap-4'>
            <a
              href='https://github.com/githubRahuld'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all'
            >
              <Github size={18} />
            </a>
            <a
              href='https://www.linkedin.com/in/rahuldhakad201/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all'
            >
              <Linkedin size={18} />
            </a>
            <a
              href='https://x.com/RahulDh94738879'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all'
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className='text-white font-bold font-orbitron mb-6'>Explore</h4>
          <ul className='space-y-4'>
            {["Home", "Services", "Work", "Team", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='text-slate-400 hover:text-cyan-400 transition-colors text-sm'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className='text-white font-bold font-orbitron mb-6'>Contact</h4>
          <ul className='space-y-4'>
            <li className='flex items-start gap-3 text-slate-400 text-sm'>
              <MapPin className='text-cyan-500 shrink-0' size={18} />
              <span>Madhya Pradesh, India</span>
            </li>
            <li className='flex items-center gap-3 text-slate-400 text-sm'>
              <Mail className='text-cyan-500 shrink-0' size={18} />
              <a
                href='mailto:rahuldhakad201.rd@gmail.com'
                className='hover:text-white transition-colors'
              >
                rahuldhakad201.rd@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-3 text-slate-400 text-sm'>
              <Phone className='text-cyan-500 shrink-0' size={18} />
              <a
                href='tel:+919131279165'
                className='hover:text-white transition-colors'
              >
                +91 91312 79165
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-slate-500 text-xs'>
          © 2025 Arcy Digital. All rights reserved.
        </p>
        <div className='flex gap-6'>
          <a
            href='#'
            className='text-slate-500 hover:text-white text-xs transition-colors'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='text-slate-500 hover:text-white text-xs transition-colors'
          >
            Terms of Service
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
    <div className='bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30'>
      <GlobalStyles />
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
