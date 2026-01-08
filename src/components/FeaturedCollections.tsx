import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondRing from "@/assets/diamond-ring.jpg";
import bridalSet from "@/assets/bridal-set.jpg";
import bangles from "@/assets/bangles.jpg";

const collections = [
  {
    id: 1,
    name: "Gold Necklaces",
    image: goldNecklace,
    description: "Timeless elegance in pure gold",
  },
  {
    id: 2,
    name: "Diamond Rings",
    image: diamondRing,
    description: "Brilliance that lasts forever",
  },
  {
    id: 3,
    name: "Bridal Jewellery",
    image: bridalSet,
    description: "For your most special day",
  },
  {
    id: 4,
    name: "Bangles & Bracelets",
    image: bangles,
    description: "Adorn your wrists in gold",
  },
];

const FeaturedCollections = () => {
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
            Our Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-gold-gradient">
            Featured Collections
          </h2>
          <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Explore our curated selection of exquisite jewellery, crafted with 
            precision and passion by master artisans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/gallery"
                className="group block relative overflow-hidden rounded-lg luxury-border-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    {collection.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
