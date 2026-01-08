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
      <main className="pt-25 mt-16">
        {/* Hero Section */}
        <section className="relative h-[65vh] overflow-hidden">
          <img
            src={aboutImage}
            alt="RamaChary and Sons Jewellery Works"
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
                  About R&S jewelry Works
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
                    Rama Chary and Sons Jewellery Works is a family-owned jewelry business that has been serving with dedication and integrity since 1979.
                     Our brand, established by Rama Chary and continued by his son, Nagaraju Chary, is denoted through their purity, skill, and integrity 
                     that has originated from small dreams that have now started turning into a name on which all generations have to rely.
                  </p>
                  <p>
                   Our store is located in Punjagutta, Hyderabad, we offer a thoughtfully curated range of gold, silver, and diamond jewellery .
                   The designs offered by us have been rooted in the varied traditions of Indian cultures, together with classics and current trends. 
                   We specialise in custom-made jewellery, transforming personal ideas into unique, meaningful creations for every special occasion. 
                  </p>
                  <p>
                    With our own manufacturing unit and some very trustworthy partners, we monitor everything very carefully. 
                    All our jewelry is BIS Hallmarked, and that means purity and authenticity. At our brand, we think that quality
                     jewelry should be accessible, authentic, and genuine—like our very own relationships that we nurture with our very own clients.
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
                  { number: "47+", label: "Years of Excellence" },
                  { number: "30K+", label: "Happy Customers" },
                  { number: "1+", label: "Expert Artisans" },
                  { number: "18+", label: "Unique Designs" },
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
