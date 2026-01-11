import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import necklaces1 from "@/assets/necklaces (1).png";
import necklaces2 from "@/assets/necklaces (2).png";
import necklaces3 from "@/assets/necklaces (3).png";
import necklaces4 from "@/assets/necklaces (4).png";
import necklaces5 from "@/assets/necklaces (5).png";
import necklaces6 from "@/assets/necklaces (6).png";
import necklaces7 from "@/assets/necklaces (7).png";
import necklaces8 from "@/assets/necklaces (8).png";
import necklaces9 from "@/assets/necklaces (9).png";
import necklaces10 from "@/assets/necklaces (10).png";
import necklaces11 from "@/assets/necklaces (11).png";
import necklaces12 from "@/assets/necklaces (12).png";
import necklaces13 from "@/assets/necklaces (13).png";
import necklaces14 from "@/assets/necklaces (14).png";
import necklaces15 from "@/assets/necklaces (15).png";
import necklaces16 from "@/assets/necklaces (16).png";
import necklaces17 from "@/assets/necklaces (17).png";
import necklaces18 from "@/assets/necklaces (18).png";
import diamondRing from "@/assets/diamond-ring.jpg";
import ring1 from "@/assets/ring1.png";
import ring2 from "@/assets/ring2.png";
import ring3 from "@/assets/ring3.png";
import ring4 from "@/assets/ring4.png";
import ring5 from "@/assets/ring5.png";
import ring6 from "@/assets/ring6.png";
import ring7 from "@/assets/ring7.png";
import ring8 from "@/assets/ring8.png";
import ring9 from "@/assets/ring9.png";
import ring10 from "@/assets/ring10.png";
import ring11 from "@/assets/ring11.png";
import ring12 from "@/assets/ring12.png";
import ring13 from "@/assets/ring13.png";
import ring14 from "@/assets/ring14.png";
import ring15 from "@/assets/ring15.png";
import ring16 from "@/assets/ring16.png";
import ring17 from "@/assets/ring17.png";
import ring18 from "@/assets/ring18.png";
import ring19 from "@/assets/ring19.png";
import ring20 from "@/assets/ring20.png";
import ring21 from "@/assets/ring21.png";
import ring22 from "@/assets/ring22.png";
import ring23 from "@/assets/ring23.png";
import ring24 from "@/assets/ring24.png";
import ring25 from "@/assets/ring25.png";
import ring26 from "@/assets/ring26.png";
import ring27 from "@/assets/ring27.png";
import ring28 from "@/assets/ring28.png";
import bridalSet from "@/assets/bridal-set.jpg";
import bangles13 from "@/assets/bangle13.jpg";
import bangles1 from "@/assets/bangle1.jpg";
import bangles2 from "@/assets/bangle2.jpg";
import bangles3 from "@/assets/bangle3.jpg";
import bangles4 from "@/assets/bangle4.jpg";
import bangles5 from "@/assets/bangle5.jpg";
import bangles6 from "@/assets/bangle6.jpg";
import bangles7 from "@/assets/bangle7.jpg";
import bangles8 from "@/assets/bangle8.jpg";
import bangles9 from "@/assets/bangle9.jpg";
import bangles10 from "@/assets/bangle10.jpg";
import bangles11 from "@/assets/bangle11.jpg";
import bangles12 from "@/assets/bangle12.jpg";
import bangles14 from "@/assets/bangle14.jpg";
import earrings1 from "@/assets/earrings1.jpg";
import earrings2 from "@/assets/earrings2.jpg";
import earrings3 from "@/assets/earrings3.jpg";
import earrings4 from "@/assets/earrings4.jpg";
import earrings5 from "@/assets/earrings5.jpg";
import earrings6 from "@/assets/earrings6.jpg";
import earrings7 from "@/assets/earrings7.jpg";
import earrings8 from "@/assets/earrings8.jpg";
import earring9 from "@/assets/earring9.jpg";
import earring10 from "@/assets/earring10.jpg";
import earring11 from "@/assets/earring11.jpg";
import earring12 from "@/assets/earring12.jpg";
import earring13 from "@/assets/earring13.jpg";
import earring14 from "@/assets/earring14.jpg";
import earring15 from "@/assets/earring15.jpg";
import earring16 from "@/assets/earring16.jpg";
import earring17 from "@/assets/earring17.jpg";
import earring18 from "@/assets/earring18.jpg";
import chain1 from "@/assets/chain1.jpg";
import chain2 from "@/assets/chain2.jpg";
import chain3 from "@/assets/chain3.jpg";
import chain4 from "@/assets/chain4.jpg";
import chain5 from "@/assets/chain5.jpg";
import chain6 from "@/assets/chain6.jpg";
import chain7 from "@/assets/chain7.jpg";
import chain8 from "@/assets/chain8.jpg";
import chain9 from "@/assets/chain9.jpg";
import chain10 from "@/assets/chain10.jpg";
import chain11 from "@/assets/chain11.jpg";
import bracelets1 from "@/assets/bracelets1.jpg";
import bracelets2 from "@/assets/bracelets2.jpg";
import bracelets3 from "@/assets/bracelets3.jpg";
import bracelets4 from "@/assets/bracelets4.jpg";
import bracelets5 from "@/assets/bracelets5.jpg";
import bracelets6 from "@/assets/bracelets6.jpg";
import bracelets7 from "@/assets/bracelets7.jpg";
import bracelets8 from "@/assets/bracelets8.jpg";
import bracelets9 from "@/assets/bracelets9.jpg";
import champasarelu1 from "@/assets/champasarelu1.jpg";
import champasarelu2 from "@/assets/champasarelu2.jpg";
import champasarelu3 from "@/assets/champasarelu3.jpg";
import champasarelu4 from "@/assets/champasarelu4.jpg";
import champasarelu5 from "@/assets/champasarelu5.jpg";
import champasarelu6 from "@/assets/champasarelu6.jpg";
import champasarelu7 from "@/assets/champasarelu7.jpg";
import champasarelu8 from "@/assets/champasarelu8.jpg";
import Blackbreads1 from "@/assets/blackbeads1.jpg";
import Blackbreads2 from "@/assets/blackbeads2.jpg";
import Blackbreads3 from "@/assets/blackbeads3.jpg";
import Blackbreads4 from "@/assets/blackbeads4.jpg";
import Blackbreads5 from "@/assets/blackbeads5.jpg";
import Blackbreads6 from "@/assets/blackbeads6.jpg";
import Blackbreads7 from "@/assets/blackbeads7.jpg";
import Blackbreads8 from "@/assets/blackbreads8.jpg";
import Blackbreads9 from "@/assets/blackbeads9.jpg";
import Blackbreads10 from "@/assets/blackbreads10.jpg";
import vaddanamu1 from "@/assets/vaddanamulu (1).png";
import vaddanamu2 from "@/assets/vaddanamulu (2).png";
import vaddanamu3 from "@/assets/vaddanamulu (3).png";
import vaddanamu4 from "@/assets/vaddanamulu (4).png";
import vaddanamu5 from "@/assets/vaddanamulu (5).png";
import vaddanamu6 from "@/assets/vaddanamulu (6).png";
import vaddanamu7 from "@/assets/vaddanamulu (7).png";
import vaddanamu8 from "@/assets/vaddanamulu (8).png";
import vankeelu1 from "@/assets/vankeelu (1).png";
import vankeelu2 from "@/assets/vankeelu (2).png";
import vankeelu3 from "@/assets/vankeelu (3).png";
import vankeelu4 from "@/assets/vankeelu (4).png";
import vankeelu5 from "@/assets/vankeelu (5).png";
import vankeelu6 from "@/assets/vankeelu (6).png";
import vankeelu7 from "@/assets/vankeelu (7).png";
import choukar1 from "@/assets/choukar1.jpg";
import choukar2 from "@/assets/choukar2.jpg";
import choukar3 from "@/assets/choukar3.jpg";
import choukar4 from "@/assets/choukar4.jpg";
import choukar5 from "@/assets/choukar5.jpg";
import choukar6 from "@/assets/choukar6.jpg";
import choukar7 from "@/assets/choukar7.jpg";
import choukar8 from "@/assets/choukar8.jpg";
import choukar9 from "@/assets/choukar9.jpg";
import choukar10 from "@/assets/choukar10.jpg";
import longhaaralu1 from "@/assets/long haaralu (1).png";
import longhaaralu2 from "@/assets/long haaralu (2).png";
import longhaaralu3 from "@/assets/long haaralu (3).png";
import longhaaralu4 from "@/assets/long haaralu (4).png";
import longhaaralu5 from "@/assets/long haaralu (5).png";
import longhaaralu6 from "@/assets/long haaralu (6).png";
import longhaaralu7 from "@/assets/long haaralu (7).png";
import longhaaralu8 from "@/assets/long haaralu (8).png";
import longhaaralu9 from "@/assets/long haaralu (9).png";
import longhaaralu10 from "@/assets/long haaralu (10).png";
import longhaaralu11 from "@/assets/long haaralu (11).png";
import longhaaralu12 from "@/assets/long haaralu (12).png";
import longhaaralu13 from "@/assets/long haaralu (13).png";
import longhaaralu14 from "@/assets/long haaralu (14).png";
import longhaaralu15 from "@/assets/long haaralu (15).png";
import longhaaralu16 from "@/assets/long haaralu (16).png";
import longhaaralu17 from "@/assets/long haaralu (17).png";
import longhaaralu18 from "@/assets/long haaralu (18).png";
import longhaaralu19 from "@/assets/long haaralu (19).png";
import longhaaralu20 from "@/assets/long haaralu (20).png";
import longhaaralu21 from "@/assets/long haaralu (21).png";
import longhaaralu22 from "@/assets/long haaralu (22).png";
import longhaaralu23 from "@/assets/long haaralu (23).png";
import longhaaralu24 from "@/assets/long haaralu (24).png";
import longhaaralu25 from "@/assets/long haaralu (25).png";
import longhaaralu26 from "@/assets/long haaralu (26).png";
import longhaaralu27 from "@/assets/long haaralu (27).png";
import longhaaralu28 from "@/assets/long haaralu (28).png";
import longhaaralu29 from "@/assets/long haaralu (29).png";
import longhaaralu30 from "@/assets/long haaralu (30).png";
import longhaaralu31 from "@/assets/long haaralu (31).png";
import longhaaralu32 from "@/assets/long haaralu (32).png";
import { i } from "node_modules/framer-motion/dist/types.d-a9pt5qxk";


const categories = ["All", "Necklaces", "Rings", "Vankeelu", "Bangles", "Earrings", "Chains", "Bracelets", "Champasarelu", "BlackBeads", "Vaddanamulu", "Choukar", "LongHaaralu"];

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
    id: 3,
    name: "Bridal Elegance Set",
    category: "Bridal",
    image: bridalSet,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 4,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles13,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 5,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 6,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 7,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 8,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 9,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 10,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 11,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 12,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 13,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 14,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 15,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 16,
    name: "Golden Dynasty Bangles",
    category: "Bangles",
    image: bangles12,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 17,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 18,
    name: "Ruby Heart Pendant",
    category: "Chains",
    image: chain1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },

  {
    id: 20,
    name: "Solitaire Diamond Ring",
    category: "Rings",
    image: diamondRing,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 21,
    name: "Complete Bridal Collection",
    category: "Bridal",
    image: bridalSet,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 22,
    name: "Traditional Gold Bangles",
    category: "Bangles",
    image: bangles14,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 23,
    name: "Diamond Drop Earrings",
    category: "Earrings",
    image: earrings7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 24,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 25,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain3,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 26,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain4,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 27,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 28,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 29,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 30,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 31,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 32,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 33,
    name: "Emerald Gold Pendant",
    category: "Chains",
    image: chain11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 34,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 35,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 36,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 37,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings3,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 38,
    name: "Chandelier Earrings",
    category: "Earrings",
    image: earrings2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 39,
    name: "",
    category: "",
    image: earrings1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 40,
    name: "Elegant Gold Bracelet",
    category: "Bracelets",
    image: bracelets1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 41,
    name: " Bracelet",
    category: "Bracelets",
    image: bracelets2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 42,
    name: " Bracelet",
    category: "Bracelets",
    image: bracelets3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 43,
    name: " Bracelet",
    category: "Bracelets",
    image: bracelets4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 44,
    name: "Bracelet",
    category: "Bracelets",
    image: bracelets5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 45,
    name: " Bracelet",
    category: "Bracelets",
    image: bracelets6,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 46,
    name: ' Bracelet',
    category: 'Bracelets',
    image: bracelets7,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 47,
    name: 'Bracelet',
    category: 'Bracelets',
    image: bracelets8,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 48,
    name: ' Bracelet',
    category: 'Bracelets',
    image: bracelets9,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 49,
    name: "Champasarelu Necklace",
    category: "Champasarelu",
    image: champasarelu1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 50,
    name: "Champasarelu Necklace",
    category: "Champasarelu",
    image: champasarelu2,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 51,
    name: "Champasarelu Necklace",
    category: "Champasarelu",
    image: champasarelu3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 52,
    name: "Champasarelu Necklace",
    category: "Champasarelu",
    image: champasarelu4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 53,
    name: 'Champasarelu Necklace',
    category: 'Champasarelu',
    image: champasarelu5,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 54,
    name: 'Champasarelu Necklace',
    category: 'Champasarelu',
    image: champasarelu6,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 55,
    name: 'Champasarelu Necklace',
    category: 'Champasarelu',
    image: champasarelu7,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 56,
    name: 'Champasarelu Necklace',
    category: 'Champasarelu',
    image: champasarelu8,
    description: '',
    material: '',
    weight: '',
    price: '',
    rating: 5
  },
  {
    id: 57,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 58,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 59,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 60,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 61,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 62,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 63,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 64,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 65,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 66,
    name: "Black Beads Necklace",
    category: "BlackBeads",
    image: Blackbreads10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 67,
    name: "Earings Set",
    category: "Earrings",
    image: earring9,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 68,
    name: "Earings Set",
    category: "Earrings",
    image: earring10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 69,
    name: "Earings Set",
    category: "Earrings",
    image: earring11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 70,
    name: "Earings Set",
    category: "Earrings",
    image: earring12,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 71,
    name: "Earings Set",
    category: "Earrings",
    image: earring13,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 72,
    name: "Earings Set",
    category: "Earrings",
    image: earring14,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 73,
    name: "Earings Set",
    category: "Earrings",
    image: earring15,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 74,
    name: "Earings Set",
    category: "Earrings",
    image: earring16,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 75,
    name: "Earings Set",
    category: "Earrings",
    image: earring17,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 76,
    name: "Earings Set",
    category: "Earrings",
    image: earring18,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 77,
    name: "Gold Ring",
    category: "Rings",
    image: ring1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 78,
    name: "Gold Ring",
    category: "Rings",
    image: ring2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 79,
    name: "Gold Ring",
    category: "Rings",
    image: ring3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 80,
    name: "Gold Ring",
    category: "Rings",
    image: ring4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 81,
    name: "Gold Ring",
    category: "Rings",
    image: ring5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 82,
    name: "Gold Ring",
    category: "Rings",
    image: ring6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 83,
    name: "Gold Ring",
    category: "Rings",
    image: ring7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 84,
    name: "Gold Ring",
    category: "Rings",
    image: ring8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 85,
    name: "Gold Ring",
    category: "Rings",
    image: ring9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 86,
    name: "Gold Ring",
    category: "Rings",
    image: ring10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 87,
    name: "Gold Ring",
    category: "Rings",
    image: ring11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 88,
    name: "Gold Ring",
    category: "Rings",
    image: ring12,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 89,
    name: "Gold Ring",
    category: "Rings",
    image: ring13,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 90,
    name: "Gold Ring",
    category: "Rings",
    image: ring14,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 91,
    name: "Gold Ring",
    category: "Rings",
    image: ring15,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 92,
    name: "Gold Ring",
    category: "Rings",
    image: ring16,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 93,
    name: "Gold Ring",
    category: "Rings",
    image: ring17,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 94,
    name: "Gold Ring",
    category: "Rings",
    image: ring18,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 95,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring19,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 96,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring20,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 97,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring21,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 98,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring22,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 99,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring23,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 100,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring24,
    description: " ",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 101,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring25,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 102,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring26,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 103,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring27,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 104,
    name: "Diamond Studded Ring",
    category: "Rings",
    image: ring28,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 105,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 106,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 107,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 108,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 109,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 110,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 111,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 112,
    name: "Vaddanamulu",
    category: "Vaddanamulu",
    image: vaddanamu8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 113,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 114,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 115,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 116,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 117,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 118,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 119,
    name: "vankeelu",
    category: "Vankeelu",
    image: vankeelu7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 120,
    name: "Choukar",
    category: "Choukar",
    image: choukar1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 121,
    name: "Choukar",
    category: "Choukar",
    image: choukar2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 122,
    name: "Choukar",
    category: "Choukar",
    image: choukar3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 123,
    name: "Choukar",
    category: "Choukar",
    image: choukar4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 124,
    name: "Choukar",
    category: "Choukar",
    image: choukar5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 125,
    name: "Choukar",
    category: "Choukar",
    image: choukar6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 126,
    name: "Choukar",
    category: "Choukar",
    image: choukar7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 127,
    name: "Choukar",
    category: "Choukar",
    image: choukar8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 128,
    name: "Choukar",
    category: "Choukar",
    image: choukar9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 129,
    name: "Choukar",
    category: "Choukar",
    image: choukar10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 130,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 131,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 132,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 133,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 134,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 135,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces6,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 136,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 137,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces8,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 138,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 139,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 140,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 141,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces12,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 142,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces13,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 143,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces14,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 144,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces15,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 145,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces16,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 146,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces17,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 147,
    name: "Necklace ",
    category: "Necklaces",
    image: necklaces18,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 4
  },
  {
    id: 148,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu1,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 149,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu2,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 150,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu3,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 151,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu4,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 152,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu5,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },

  {
    id: 154,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu7,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },

  {
    id: 156,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu9,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 157,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu10,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 158,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu11,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 159,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu12,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 160,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu13,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 161,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu14,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 162,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu15,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 163,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu16,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 164,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu17,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 165,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu18,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 166,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu19,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 167,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu20,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 168,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu21,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 169,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu22,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },


  {
    id: 172,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu25,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 173,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu26,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 174,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu27,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 175,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu28,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 176,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu29,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  },
  {
    id: 177,
    name: "Long haaralu",
    category: "LongHaaralu",
    image: longhaaralu30,
    description: "",
    material: "",
    weight: "",
    price: "",
    rating: 5
  }
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
            {/* Mobile Dropdown */}
            <div className="sm:hidden mb-4">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full border border-primary/20 rounded-lg px-4 py-2 font-body bg-card text-foreground"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-body px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
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
                    <div className="flex justify-between py-2 border-b border-primary/0">
                      <span className="font-body text-muted-foreground"></span>
                      <span className="font-body text-foreground font-medium">{selectedItem.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-primary/0">
                      <span className="font-body text-muted-foreground"></span>
                      <span className="font-body text-foreground font-medium">{selectedItem.weight}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-body text-muted-foreground"></span>
                      <span className="font-display text-2xl text-primary font-semibold">{selectedItem.price}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/918309599573?text=Hi, I'm interested in ${selectedItem.name} (${selectedItem.price})`}
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
