import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import goldNecklace from "@/assets/gold-necklace.jpg";
import diamondRing from "@/assets/diamond-ring.jpg";
import bridalSet from "@/assets/bridal-set.jpg";
import bangles from "@/assets/bangles.jpg";
import earrings from "@/assets/earrings.jpg";
import pendant from "@/assets/pendant.jpg";

const categories = ["All", "Necklaces", "Rings", "Bridal", "Bangles", "Earrings", "Pendants"];

interface GalleryItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  material: string;
  weight: string;
  price: string;
  rating: number;
}

const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    name: "Royal Heritage Necklace", 
    category: "Necklaces", 
    image: goldNecklace,
    description: "A stunning 22K gold necklace featuring intricate traditional craftsmanship. This masterpiece showcases delicate filigree work and is adorned with precious gemstones, perfect for weddings and grand celebrations.",
    material: "22K Gold, Ruby, Emerald",
    weight: "45 grams",
    price: "₹2,85,000",
    rating: 5
  },
  { 
    id: 2, 
    name: "Eternal Promise Ring", 
    category: "Rings", 
    image: diamondRing,
    description: "An exquisite solitaire diamond ring set in 18K white gold. The brilliant-cut diamond sparkles with exceptional clarity and fire, symbolizing eternal love and commitment.",
    material: "18K White Gold, VVS Diamond",
    weight: "4.5 grams",
    price: "₹1,95,000",
    rating: 5
  },
  { 
    id: 3, 
    name: "Bridal Elegance Set", 
    category: "Bridal", 
    image: bridalSet,
    description: "A complete bridal jewellery set featuring a magnificent necklace, matching earrings, and bangles. Crafted with 22K gold and embellished with kundan work and precious stones.",
    material: "22K Gold, Kundan, Polki",
    weight: "180 grams (set)",
    price: "₹8,50,000",
    rating: 5
  },
  { 
    id: 4, 
    name: "Golden Dynasty Bangles", 
    category: "Bangles", 
    image: bangles,
    description: "A set of four intricately designed 22K gold bangles featuring traditional motifs. Each bangle is handcrafted with attention to detail, perfect for everyday elegance or festive occasions.",
    material: "22K Gold",
    weight: "60 grams (set of 4)",
    price: "₹3,60,000",
    rating: 4
  },
  { 
    id: 5, 
    name: "Chandelier Earrings", 
    category: "Earrings", 
    image: earrings,
    description: "Elegant chandelier-style earrings featuring cascading gold drops adorned with pearls and diamonds. These statement pieces add glamour to any ensemble.",
    material: "18K Gold, Pearls, Diamonds",
    weight: "15 grams",
    price: "₹95,000",
    rating: 5
  },
  { 
    id: 6, 
    name: "Ruby Heart Pendant", 
    category: "Pendants", 
    image: pendant,
    description: "A romantic heart-shaped pendant featuring a natural Burmese ruby surrounded by brilliant diamonds. Set in 18K rose gold with a delicate chain included.",
    material: "18K Rose Gold, Ruby, Diamonds",
    weight: "8 grams",
    price: "₹1,25,000",
    rating: 5
  },
  { 
    id: 7, 
    name: "Kundan Necklace Set", 
    category: "Necklaces", 
    image: goldNecklace,
    description: "A traditional Kundan necklace set featuring elaborate gold work and colorful gemstones. This heritage piece represents the finest of Indian jewellery craftsmanship.",
    material: "22K Gold, Kundan, Meenakari",
    weight: "75 grams",
    price: "₹4,50,000",
    rating: 4
  },
  { 
    id: 8, 
    name: "Solitaire Diamond Ring", 
    category: "Rings", 
    image: diamondRing,
    description: "A timeless solitaire ring featuring a 1-carat brilliant-cut diamond. The classic four-prong setting in platinum allows maximum light to enhance the diamond's brilliance.",
    material: "Platinum, 1ct Diamond",
    weight: "5 grams",
    price: "₹3,50,000",
    rating: 5
  },
  { 
    id: 9, 
    name: "Complete Bridal Collection", 
    category: "Bridal", 
    image: bridalSet,
    description: "An opulent bridal collection including a statement necklace, choker, earrings, maang tikka, and bangles. Each piece features exquisite Polki diamonds and traditional craftsmanship.",
    material: "22K Gold, Polki Diamonds",
    weight: "250 grams (full set)",
    price: "₹12,00,000",
    rating: 5
  },
  { 
    id: 10, 
    name: "Traditional Gold Bangles", 
    category: "Bangles", 
    image: bangles,
    description: "Classic 22K gold bangles with delicate temple-inspired carvings. These timeless pieces blend traditional aesthetics with contemporary wearability.",
    material: "22K Gold",
    weight: "40 grams (pair)",
    price: "₹2,40,000",
    rating: 4
  },
  { 
    id: 11, 
    name: "Diamond Drop Earrings", 
    category: "Earrings", 
    image: earrings,
    description: "Sophisticated drop earrings featuring pear-shaped diamonds that catch light beautifully. Set in 18K white gold with secure push-back closures.",
    material: "18K White Gold, Diamonds",
    weight: "10 grams",
    price: "₹1,75,000",
    rating: 5
  },
  { 
    id: 12, 
    name: "Emerald Gold Pendant", 
    category: "Pendants", 
    image: pendant,
    description: "An elegant pendant featuring a natural Colombian emerald surrounded by a halo of diamonds. The vibrant green gemstone is set in 22K yellow gold.",
    material: "22K Gold, Emerald, Diamonds",
    weight: "12 grams",
    price: "₹1,85,000",
    rating: 5
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
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
                Explore
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 text-gold-gradient">
                Our Gallery
              </h1>
              <p className="font-body text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Browse our exquisite collection of handcrafted jewellery pieces
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-primary/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-body px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 border border-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative overflow-hidden rounded-lg luxury-border-hover">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-primary text-xs font-body mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-elegant border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors duration-200"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-body mb-4 w-fit">
                    {selectedItem.category}
                  </span>
                  
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {selectedItem.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < selectedItem.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                      />
                    ))}
                    <span className="text-muted-foreground text-sm ml-2">({selectedItem.rating}/5)</span>
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-primary/10">
                      <span className="font-body text-muted-foreground">Material</span>
                      <span className="font-body text-foreground font-medium">{selectedItem.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-primary/10">
                      <span className="font-body text-muted-foreground">Weight</span>
                      <span className="font-body text-foreground font-medium">{selectedItem.weight}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-body text-muted-foreground">Price</span>
                      <span className="font-display text-2xl text-primary font-semibold">{selectedItem.price}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/919876543210?text=Hi, I'm interested in ${selectedItem.name} (${selectedItem.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-primary text-primary-foreground font-body text-center rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
