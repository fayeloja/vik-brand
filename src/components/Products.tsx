import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Container,
  UtensilsCrossed,
  Droplet,
  Home,
  PackageOpen,
  Shirt,
} from "lucide-react";
import { motion } from "motion/react";

const productCategories = [
  {
    icon: Container,
    title: "Storage Containers",
    description:
      "Airtight, durable containers for kitchen and pantry organization",
    image: "/product/food-storage1.png",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Essentials",
    description: "Plates, bowls, cups, and utensils for modern dining",
    image: "/product/kitchen3.png",
  },
  {
    icon: Droplet,
    title: "Water Solutions",
    description: "Water bottles, jugs, and dispensers for daily hydration",
    image: "/product/water_bottles.png",
  },
  {
    icon: Home,
    title: "Home Organization",
    description: "Bins, baskets, and organizers for clutter-free living",
    image: "/product/home-organization.png",
  },
  {
    icon: PackageOpen,
    title: "Lunch & Picnic",
    description: "Portable containers and lunch boxes for on-the-go meals",
    image: "/product/food-container.png",
  },
  {
    icon: Shirt,
    title: "Laundry & Cleaning",
    description: "Baskets, buckets, and cleaning accessories",
    image: "/product/laundry-basket.png",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 bg-slate-900 text-white uppercase tracking-wider text-sm mb-4"
          >
            Product Catalog
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-900 mb-4 uppercase tracking-tight"
          >
            Complete Range of Household Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 leading-relaxed"
          >
            Comprehensive selection of premium plastic products engineered for
            quality and performance.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-900" />
                      </div>
                      <div className="text-white">
                        <div className="uppercase tracking-wide text-sm">
                          {category.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
