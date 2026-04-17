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
  video?: string;
  year: string;
  featured?: boolean;
}

// --- Mock Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "LIGHT & SHADOW",
    category: "Photography",
    description: "An exploration of natural light and urban architecture through high-contrast black and white photography.",
    image: "/specs.JPG",
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "ARTIFICIAL SOUL",
    category: "AI Short Film",
    description: "A compelling short cinematic experience generated and edited using cutting-edge AI tools. Exploring the intersection of human emotion and machine learning.",
    image: "https://picsum.photos/seed/aifilm/1200/800",
    video: "/AI Short Flilm - Final Output.mp4",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "ACM BMU STUDENT CHAPTER",
    category: "Logo Design & Branding",
    description: "A clean, modern brand identity designed for the ACM Student Chapter at BMU, balancing academic professionalism with a tech-forward aesthetic.",
    image: "/ACM BMU - Student Chapter logo.PNG",
    year: "2024",
    featured: true
  },
  {
    id: 4,
    title: "DIWALI DIYA",
    category: "Photography",
    description: "Capturing the serene warmth and spiritual resonance of a traditional Diya, focusing on the dance between flame and shadow.",
    image: "/Diwali_Diya_IMG_1266.JPG",
    year: "2024"
  },
  {
    id: 5,
    title: "HAPPY MEAL",
    category: "Photography",
    description: "A candid moment of joy found in the simple pleasure of a meal, highlighting colors and textures that evoke comfort.",
    image: "/Happy_Meal.JPG",
    year: "2024"
  },
  {
    id: 6,
    title: "SOOTHING TOUCH",
    category: "Photography",
    description: "A visual representation of healing and empathy, focusing on the power of connection in a complex world.",
    image: "/Soothing_Touch_Heals_The_World.JPG",
    year: "2024"
  },
  {
    id: 7,
    title: "DISCO VIBES",
    category: "Photography",
    description: "Capturing the energy and vibrant colors of urban nightlife through a lens that emphasizes motion and mood.",
    image: "/547BA7B5-34A8-4CB7-970E-407CDE66337F.jpeg",
    year: "2024"
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
        Ishaan Ahuja
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
              BA Graphic Design & Digital Media Marketing student at Manipal Institute of Communication. 
              Exploring the boundaries of visual storytelling through photography, digital art, and AI cinema.
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
              src="/specs.JPG" 
              alt="Ishaan's Photography - Specs" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 vertical-text text-[10px] font-mono opacity-50 uppercase tracking-widest">
              EST. 2026 / PORTFOLIO
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

const FeaturedWork = ({ onProjectClick }: { onProjectClick: (p: Project) => void }) => {
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
              onClick={() => onProjectClick(project)}
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
          <div className="aspect-square bg-medium/10 overflow-hidden border border-ink/10 flex items-center justify-center">
            <img 
              src="/Dinosaur_IMG_0508.JPG" 
              alt="Ishaan Ahuja" 
              className="w-full h-full object-cover block grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/ishaan/800/800";
                console.error("Personal photo failed to load. Please ensure Dinosaur_IMG_0508.JPG is uploaded to the public folder and is not an empty file.");
              }}
            />
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-serif leading-snug">
              I am a 1st-year student at Manipal Institute of Communication, specializing in Graphic Design and Digital Media Marketing. 
              My creative journey is fueled by a passion for capturing the world through my lens and transforming ideas into visual reality using Adobe Photoshop and Illustrator.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ink/10">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">Core Skills</h4>
                <ul className="space-y-2 text-sm font-medium uppercase tracking-wider">
                  <li>Photography</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>AI Video Production</li>
                  <li>Digital Illustration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-40">Location</h4>
                <p className="text-sm font-medium uppercase tracking-wider">
                  Based in Manipal, India <br />
                  Available Worldwide
                </p>
                <h4 className="text-xs font-bold uppercase tracking-widest mt-8 mb-4 opacity-40">Education</h4>
                <p className="text-sm font-medium uppercase tracking-wider">
                  BA (Graphic Design & Digital Media Marketing) <br />
                  Manipal Institute of Communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkShowcase = ({ onProjectClick }: { onProjectClick: (p: Project) => void }) => {
  return (
    <section className="py-24 px-6 bg-paper border-y border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter">All Projects</h2>
          <div className="text-sm font-mono opacity-40">/ 007</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx % 2 * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
              onClick={() => onProjectClick(project)}
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
        <a href="mailto:ishaanahuja1212@gmail.com" className="group flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
            <Mail size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Email Me</span>
        </a>
        <a href="https://www.linkedin.com/in/ishaan-ahuja-11a3b1336/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
            <Linkedin size={24} />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/smalkeditz/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
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
          © 2026 Ishaan Ahuja
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest opacity-60">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/ishaan-ahuja" target="_blank" rel="noopener noreferrer">
            <Github size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/ishaan-ahuja-11a3b1336/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </a>
          <a href="mailto:ishaanahuja1212@gmail.com">
            <Mail size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork onProjectClick={setSelectedProject} />
        <About />
        <WorkShowcase onProjectClick={setSelectedProject} />
        <CreativeHighlight />
        <Contact />
      </main>
      <Footer />
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-ink/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-paper text-ink overflow-hidden border border-ink/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-paper border border-ink/10 hover:bg-ink hover:text-paper transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/5] bg-ink/5 overflow-hidden">
                  {selectedProject.video ? (
                    <video 
                      src={selectedProject.video} 
                      controls 
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-mono opacity-40 uppercase tracking-widest block mb-4">
                    {selectedProject.year} / {selectedProject.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif italic mb-6">{selectedProject.title}</h2>
                  <p className="text-lg leading-relaxed opacity-70 mb-8">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
