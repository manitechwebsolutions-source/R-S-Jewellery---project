import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Diamond, Award, Shield, Heart } from "lucide-react";
import aboutImage from "@/assets/about-lifestyle.jpg";

const values = [
  {
    icon: Diamond,
    title: "Premium Materials",
    description: "Only the finest gold and certified diamonds are used in our creations, sourced from ethical suppliers worldwide.",
  },
  {
    icon: Award,
    title: "Expert Artisans",
    description: "Our master craftsmen bring decades of experience, blending traditional techniques with modern innovation.",
  },
  {
    icon: Shield,
    title: "Trust & Authenticity",
    description: "Every piece comes with certification and lifetime warranty, ensuring your investment is protected.",
  },
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We pour our heart into every creation, ensuring each piece becomes a treasured heirloom.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={aboutImage}
            alt="Luxury Jewellery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
                  Our Story
                </span>
                <h1 className="font-display text-5xl md:text-7xl font-bold mt-4 text-gold-gradient">
                  About Lumière
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl font-bold text-gold-gradient mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1985, Lumière Jewels has been at the forefront of 
                    luxury jewellery craftsmanship for nearly four decades. Our 
                    journey began with a simple vision: to create jewellery that 
                    transcends time and tells stories of love, celebration, and 
                    legacy.
                  </p>
                  <p>
                    Each piece in our collection is a testament to our unwavering 
                    commitment to excellence. From the initial design sketch to the 
                    final polish, our master artisans pour their expertise and 
                    passion into every creation.
                  </p>
                  <p>
                    Today, we continue to honor our heritage while embracing 
                    innovation, creating pieces that blend traditional Indian 
                    craftsmanship with contemporary elegance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { number: "38+", label: "Years of Excellence" },
                  { number: "50K+", label: "Happy Customers" },
                  { number: "100+", label: "Expert Artisans" },
                  { number: "1000+", label: "Unique Designs" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-8 text-center luxury-border"
                  >
                    <p className="font-display text-4xl font-bold text-primary">
                      {stat.number}
                    </p>
                    <p className="font-body text-muted-foreground mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
                What We Stand For
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gold-gradient">
                Our Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center gold-glow">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
