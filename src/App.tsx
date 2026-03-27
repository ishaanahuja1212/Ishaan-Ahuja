/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  featured?: boolean;
}

// --- Mock Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AVRO | KO",
    category: "Branding & Identity",
    description: "A luxury hospitality brand identity focused on minimal elegance and timeless typography.",
    image: "https://picsum.photos/seed/avro/1200/800",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "MIRANDA",
    category: "Digital Media",
    description: "Interactive digital experience for a contemporary art gallery in Amsterdam.",
    image: "https://picsum.photos/seed/miranda/1200/800",
    year: "2023",
    featured: true
  },
  {
    id: 3,
    title: "PRADA®",
    category: "E-Commerce Design",
    description: "Concept store design exploring the intersection of high fashion and digital accessibility.",
    image: "https://picsum.photos/seed/prada/1200/800",
    year: "2024",
    featured: true
  },
  {
    id: 4,
    title: "LOFTGARTEN",
    category: "Editorial Design",
    description: "A quarterly magazine dedicated to urban gardening and sustainable architecture.",
    image: "https://picsum.photos/seed/loft/800/1000",
    year: "2023"
  },
  {
    id: 5,
    title: "THE PIXEL",
    category: "UI/UX Design",
    description: "A mobile application for creative professionals to manage their digital assets.",
    image: "https://picsum.photos/seed/pixel/800/1000",
    year: "2022"
  },
  {
    id: 6,
    title: "DEDECT",
    category: "Motion Graphics",
    description: "Experimental motion piece exploring the concept of digital decay and reconstruction.",
    image: "https://picsum.photos/seed/dedect/800/1000",
    year: "2023"
  }
];

// --- Components ---

const TornPaper = ({ children, className = "", position = "bottom" }: { children: React.ReactNode, className?: string, position?: "top" | "bottom" | "both" }) => {
  return (
    <div className={`relative ${className}`}>
      { (position === "top" || position === "both") && (
        <div className="absolute top-0 left-0 w-full h-12 bg-paper z-10 torn-edge-top -translate-y-1/2" />
      )}
      {children}
      { (position === "bottom" || position === "both") && (
        <div className="absolute bottom-0 left-0 w-full h-12 bg-paper z-10 torn-edge-bottom translate-y-1/2" />
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-sm border-b border-ink/10 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-serif font-bold tracking-tighter uppercase">
        Edoardo Smerilli
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#work" className="hover:text-accent transition-colors">Work</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper border-b border-ink/10 p-6 flex flex-col gap-6 text-center text-lg font-serif italic"
          >
            <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 px-6 flex flex-col justify-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] lg:text-[12vw] leading-[0.85] font-serif font-black uppercase tracking-tighter"
          >
            Creative <br />
            <span className="italic text-accent">Designer</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-xl"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Amsterdam-based independent Designer & Developer with a focus on Art direction, Motion and Branding. 
              Crafting digital experiences with a vintage editorial soul.
            </p>
            <div className="mt-8 flex gap-6">
              <a href="#work" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-ink pb-1 hover:text-accent hover:border-accent transition-all">
                View Work <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative aspect-[3/4] bg-ink/5 overflow-hidden border border-ink/10 shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/designer/800/1200" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 vertical-text text-[10px] font-mono opacity-50 uppercase tracking-widest">
              EST. 2024 / PORTFOLIO
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[5%] h-full w-[1px] bg-ink/5 hidden lg:block" />
      <div className="absolute top-0 right-[5%] h-full w-[1px] bg-ink/5 hidden lg:block" />
    </section>
  );
};

const FeaturedWork = () => {
  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section id="work" className="py-24 px-6 bg-ink text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-paper/20 pb-8">
          <h2 className="text-6xl md:text-8xl font-serif italic uppercase tracking-tighter">
            Featured <br /> <span className="not-italic">Work</span>
          </h2>
          <p className="max-w-xs text-sm opacity-60 mt-4 md:mt-0">
            A selection of projects that define my creative direction and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featured.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 border border-paper text-sm font-bold uppercase tracking-widest">View Project</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif italic">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest opacity-60 mt-1">{project.category}</p>
                </div>
                <span className="text-sm font-mono opacity-40">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Torn Edge Overlay */}
      <div className="absolute top-0 left-0 w-full h-12 bg-paper torn-edge-top -translate-y-[1px]" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-paper torn-edge-bottom translate-y-[1px]" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-7xl md:text-9xl font-serif font-black uppercase leading-[0.8] mb-8">
            About <br /> <span className="text-accent italic">Me</span>
          </h2>
          <div className="aspect-square bg-ink/5 overflow-hidden border border-ink/10">
            <img 
              src="https://picsum.photos/seed/about/800/800" 
              alt="About" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif leading-snug">
              As an artisan, I like to start from raw matter — and give life to an iconic product that makes your brand stand out, starting from a visual strategy that guide the client's vision — to reality.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ink/10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">Core Skills</h4>
                <ul className="space-y-2 text-sm font-medium uppercase tracking-wider">
                  <li>Branding & Identity</li>
                  <li>Digital Media</li>
                  <li>UI/UX Design</li>
                  <li>Motion Graphics</li>
                  <li>Art Direction</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">Location</h4>
                <p className="text-sm font-medium uppercase tracking-wider">
                  Amsterdam, NL <br />
                  Available Worldwide
                </p>
                <h4 className="text-xs font-bold uppercase tracking-widest mt-8 mb-4 opacity-40">Education</h4>
                <p className="text-sm font-medium uppercase tracking-wider">
                  Digital Media Student <br />
                  Royal Academy of Art
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkShowcase = () => {
  return (
    <section className="py-24 px-6 bg-paper border-y border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter">All Projects</h2>
          <div className="text-sm font-mono opacity-40">/ 006</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx % 2 * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative group overflow-hidden border border-ink/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-paper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-ink/10">
                  {project.category}
                </div>
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-serif italic">{project.title}</h3>
                  <p className="text-sm opacity-60 mt-2 max-w-xs">{project.description}</p>
                </div>
                <ArrowUpRight size={24} className="opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreativeHighlight = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <TornPaper position="both" className="bg-accent text-paper py-24 px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight">
              "Design is not just what it looks like and feels like. Design is how it works."
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] font-bold opacity-80">
              — My Philosophy —
            </p>
          </motion.div>
        </div>
      </TornPaper>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-7xl md:text-[12vw] font-serif font-black uppercase leading-none mb-12 tracking-tighter">
        Let's <br /> <span className="italic text-accent">Work</span> <br /> Together
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-12">
        <a href="mailto:hello@edoardo.com" className="group flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
            <Mail size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Email Me</span>
        </a>
        <a href="#" className="group flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
            <Linkedin size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
        </a>
        <a href="#" className="group flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
            <Instagram size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-bold uppercase tracking-widest">
          © 2024 Edoardo Smerilli
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest opacity-60">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
        <div className="flex gap-4">
          <Github size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          <Linkedin size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          <Mail size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <WorkShowcase />
        <CreativeHighlight />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
