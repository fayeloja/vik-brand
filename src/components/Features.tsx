import { Shield, Leaf, Award, Truck, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Shield,
    title: "Food-Safe Materials",
    description: "All products made with 100% food-grade, BPA-free plastic materials certified for safety.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Committed to sustainable manufacturing practices and recyclable materials.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous quality control ensures every product meets the highest standards.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and reliable delivery across all states in Nigeria.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Dedicated customer service team ready to assist you with any inquiries.",
  },
  {
    icon: Sparkles,
    title: "Modern Designs",
    description: "Contemporary aesthetics that complement your modern Nigerian home.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white border-t border-slate-200">
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
            Quality Assurance
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-900 mb-4 uppercase tracking-tight"
          >
            Industry-Leading Standards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 leading-relaxed"
          >
            Our commitment to excellence ensures every product meets the highest industry standards.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                  className="w-14 h-14 bg-slate-900 flex items-center justify-center mb-6"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-slate-900 mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}