import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Eye } from "lucide-react";
import heroImage from "@/assets/hero-jewellery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Diamond Necklace"
          className="w-full h-full object-cover"
        />
        
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-body text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Exquisite Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-gradient">Crafted</span><span className="text-gold-gradient"> to Shine.</span> 
            <br />
            <span className="text-gold-gradient">Designed to</span>{" "}
            <span className="text-gold-gradient">Impress.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our exclusive collection of handcrafted gold and diamond 
            jewellery, where timeless elegance meets contemporary design.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/gallery">
              <Button variant="hero" size="xl">
                <Sparkles className="w-5 h-5" />
                Shop Collection
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="heroOutline" size="xl">
                <Eye className="w-5 h-5" />
                View Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator 
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>*/}
    </section>
  );
};

export default HeroSection;
