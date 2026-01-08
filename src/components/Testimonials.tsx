import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    feedback:
      "The craftsmanship is absolutely stunning. My bridal set was beyond my expectations. Every piece tells a story of elegance.",
  },
  {
    id: 2,
    name: "Anita Mehta",
    rating: 5,
    feedback:
      "I've been a loyal customer for over 10 years. The quality and service are unmatched. Truly a luxury experience.",
  },
  {
    id: 3,
    name: "Kavitha Reddy",
    rating: 5,
    feedback:
      "The diamond ring I received was breathtaking. The attention to detail is remarkable. Highly recommend!",
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
              <div className="bg-card rounded-lg p-8 luxury-border-hover animate-glow-pulse h-full">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
