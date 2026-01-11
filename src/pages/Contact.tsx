import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["#8-3-952/10/1/1", "Panjagutta colony, Srinagar Colony, Hyderabad 500016"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91  9666941524", "+91 8919045331"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["cvnagarajchary@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 9:00 PM", ],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Get form values
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;

    // Construct WhatsApp message
    const whatsappMessage = `Hello! My name is ${name} (${email}).%0A${message}`;

    // Replace with your WhatsApp number in international format (no +)
    const phoneNumber = "918309599573";

    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");

    // Optional: Reset form after sending
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-25 mt-16">
        {/* Header */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
                Get in Touch
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 text-gold-gradient">
                Contact Us
              </h1>
              <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                We'd love to hear from you. Reach out for inquiries, appointments,
                or to learn more about our collections.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl font-bold text-gold-gradient mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-body text-foreground block mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="bg-card border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-foreground block mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-card border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-foreground block mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                      className="bg-card border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="font-display text-3xl font-bold text-gold-gradient mb-8">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 luxury-border-hover"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="font-body text-muted-foreground text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-card rounded-lg p-0 luxury-border h-64 flex items-center overflow-hidden">
                    <iframe
                      title="RamaChary & Sons Jewellery Works Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6247858363613!2d78.4484746!3d17.4297853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91879a10c10b%3A0x5769393d212b1fec!2sRamaChary%20%26%20Sons%20Jewellery%20Works!5e0!3m2!1sen!2sin!4v1767885717269!5m2!1sen!2sin"
                      width="125%"
                      height="113%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
