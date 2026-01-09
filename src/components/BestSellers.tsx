import { motion } from "framer-motion";
import { Star } from "lucide-react";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondRing from "@/assets/diamond-ring.jpg";
import bridalSet from "@/assets/bridal-set.jpg";
import bangles from "@/assets/bangles.jpg";
import earrings from "@/assets/earrings.jpg";
import pendant from "@/assets/pendant.jpg";

const bestSellers = [
  {
    id: 1,
    name: "Royal Heritage Necklace",
    price: "₹2,45,000",
    rating: 5,
    image: goldNecklace,
  },
  {
    id: 2,
    name: "Eternal Promise Ring",
    price: "₹1,85,000",
    rating: 5,
    image: diamondRing,
  },
  {
    id: 3,
    name: "Bridal Elegance Set",
    price: "₹4,50,000",
    rating: 5,
    image: bridalSet,
  },
  {
    id: 4,
    name: "Golden Dynasty Bangles",
    price: "₹95,000",
    rating: 4,
    image: bangles,
  },
  {
    id: 5,
    name: "Chandelier Earrings",
    price: "₹1,25,000",
    rating: 5,
    image: earrings,
  },
  {
    id: 6,
    name: "Ruby Heart Pendant",
    price: "₹78,000",
    rating: 4,
    image: pendant,
  },
];

const BestSellers = () => {
  return (
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
            Our
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gold-gradient">
            Latest Items
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Our customers' favorite pieces, celebrated for their exceptional 
            beauty and craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-lg overflow-hidden luxury-border-hover">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl font-bold text-primary mt-3">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
