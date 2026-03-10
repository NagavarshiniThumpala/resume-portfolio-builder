import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="relative z-10 section-padding w-full max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-body text-lg tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Nagavarshini
          <br />
          <span className="text-gradient">Thumpala</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Motivated and detail-oriented CS graduate skilled in Python, Cloud, and Machine Learning. Eager to build impactful solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-5 text-muted-foreground font-body text-sm"
        >
          <a href="mailto:varshinivarsha835@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> varshinivarsha835@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Narsipatnam, India
          </span>
          <a href="https://linkedin.com/in/nagavarshini-thumpala" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com/NagavarshiniThumpala" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github size={16} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
