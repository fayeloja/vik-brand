import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homemaker, Lagos",
    company: "Private Household",
    rating: 5,
    text: "Bristar containers have transformed my kitchen organization. The quality is outstanding and they maintain freshness for extended periods. Highly recommended for professional use.",
    image: "AO",
  },
  {
    name: "Chukwudi Nwankwo",
    role: "Operations Manager",
    company: "Premier Restaurant Group",
    rating: 5,
    text: "We've integrated Bristar products across our restaurant operations. Their durability and commercial-grade quality have proven essential for our daily service requirements.",
    image: "CN",
  },
  {
    name: "Fatima Ibrahim",
    role: "Procurement Officer",
    company: "Educational Institution",
    rating: 5,
    text: "Safety and quality are paramount in our purchasing decisions. Bristar consistently delivers certified, food-safe products that meet our institutional standards.",
    image: "FI",
  },
  {
    name: "Oluwaseun Adebayo",
    role: "Event Management Director",
    company: "Elite Events Nigeria",
    rating: 5,
    text: "Professional presentation and reliability are crucial in event management. Bristar products deliver both, maintaining their quality throughout large-scale operations.",
    image: "OA",
  },
  {
    name: "Ngozi Eze",
    role: "Retail Manager",
    company: "Premium Home Store",
    rating: 5,
    text: "Customer satisfaction drives our business. Bristar products consistently exceed expectations, resulting in repeat purchases and positive client feedback.",
    image: "NE",
  },
  {
    name: "Ibrahim Yusuf",
    role: "Distribution Manager",
    company: "National Supply Chain",
    rating: 5,
    text: "Product consistency and quality control are exceptional. Bristar maintains rigorous manufacturing standards that align with our distribution requirements.",
    image: "IY",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
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
            Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-900 mb-4 uppercase tracking-tight"
          >
            Trusted by Industry Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 leading-relaxed"
          >
            Hear from businesses and professionals who trust Bristar for their operational needs.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-12 h-12 text-slate-900" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-slate-900 text-slate-900"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 relative z-10 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <div className="text-slate-900 uppercase tracking-wide text-sm">{testimonial.name}</div>
                  <div className="text-slate-600 text-xs">{testimonial.role}</div>
                  <div className="text-slate-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-slate-900 text-white p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-3xl mb-2">98%</div>
              <div className="text-slate-400 uppercase tracking-wider text-xs">Customer Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-3xl mb-2">50K+</div>
              <div className="text-slate-400 uppercase tracking-wider text-xs">Verified Reviews</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-3xl mb-2">36</div>
              <div className="text-slate-400 uppercase tracking-wider text-xs">States Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-3xl mb-2">24/7</div>
              <div className="text-slate-400 uppercase tracking-wider text-xs">Support Available</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
