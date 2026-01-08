import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FaGoogle } from "react-icons/fa"; // Google icon from react-icons

const testimonials = [
  {
    id: 1,
    name: "srujana S",
    rating: 5,
    feedback:
      "We have been customers of this place since 30 years.... They make good jewellery and excellent workmanship...",
    googleLink: "https://maps.app.goo.gl/5HdD1eJyCujj5XkD7", // replace with your review link
  },
  {
    id: 2,
    name: "Pavan Kumar C V",
    rating: 5,
    feedback:
      "Trusted Jewellery makers and renowned for more than 45 years and quality making of items with experience in hand. 👌 …",
    googleLink: "https://maps.app.goo.gl/ccMeVEFg5YRKpJMJA",
  },
  {
    id: 3,
    name: "UmaRani Punna",
    rating: 5,
    feedback: "Excellent chala Baga chestharu work or designing super.....",
    googleLink: "https://maps.app.goo.gl/T67p2mhoYzLewJ2e6",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-primary tracking-[0.3em] uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gold-gradient">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-card rounded-lg p-8 luxury-border-hover animate-glow-pulse h-full flex flex-col justify-between">
                <div>
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>

                {/* Google Review Link */}
                <div className="mt-6">
                  <a
                    href={testimonial.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold-gradient transition-colors"
                  >
                    <FaGoogle className="w-5 h-5" />
                    See on Google
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
