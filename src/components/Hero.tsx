import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Award,
  Shield,
  Building2,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-white">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex gap-6">
              <span>📞 +234 816 600 6991</span>
              <span className="hidden sm:inline">
                📧 info@vikindustries.com
              </span>
            </div>
            <div className="flex gap-4">
              <span>Mon - Fri: 8AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center">
                  <img src="/bristar-logo.png" alt="Logo" />
                </div>
                <div>
                  <div className="text-slate-900 uppercase tracking-wide font-bold">
                    VIK INDUSTRIES LTD
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center gap-8"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-slate-900 uppercase tracking-wide transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-slate-700 hover:text-slate-900 uppercase tracking-wide transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-slate-700 hover:text-slate-900 uppercase tracking-wide transition-colors"
              >
                Quality
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-slate-900 text-white uppercase tracking-wide hover:bg-slate-800 transition-colors"
              >
                Contact
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2.5 text-slate-700 hover:bg-slate-50 transition-colors uppercase tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2.5 text-slate-700 hover:bg-slate-50 transition-colors uppercase tracking-wide"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2.5 text-slate-700 hover:bg-slate-50 transition-colors uppercase tracking-wide"
              >
                Quality
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2.5 bg-slate-900 text-white uppercase tracking-wide transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white uppercase tracking-wider text-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>Est. 1994 - Industry Leader</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-slate-900 leading-tight uppercase tracking-tight">
                  Premium Household Plastic Manufacturing Solutions
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vik Industries Ltd delivers world-class plastic products
                  engineered for durability, safety, and performance. Trusted by
                  millions across Nigeria.
                </p>
              </motion.div>

              {/* Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-6 py-6 border-t border-b border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-900 uppercase tracking-wide text-sm">
                      ISO Certified
                    </div>
                    <div className="text-slate-600 text-sm">
                      Quality Assured
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-900 uppercase tracking-wide text-sm">
                      BPA-Free
                    </div>
                    <div className="text-slate-600 text-sm">Food Safe</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-900 uppercase tracking-wide text-sm">
                      20+ Years
                    </div>
                    <div className="text-slate-600 text-sm">Experience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-slate-900 uppercase tracking-wide text-sm">
                      Made in Nigeria
                    </div>
                    <div className="text-slate-600 text-sm">
                      Local Manufacturing
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("products")}
                  className="px-8 py-4 bg-slate-900 text-white uppercase tracking-wide hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
                >
                  <span>View Catalog</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-slate-900 text-slate-900 uppercase tracking-wide hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </motion.button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-slate-900/5"></div>
                <ImageWithFallback
                  src="/plastic-resin-pellets-in-holding.jpg"
                  alt="Manufacturing facility"
                  className="relative w-full h-auto object-cover shadow-2xl"
                />

                {/* Stat Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-slate-200"
                >
                  <div className="text-slate-900 text-3xl mb-1">1M+</div>
                  <div className="text-slate-600 uppercase tracking-wide text-sm">
                    Satisfied Customers
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -top-8 -right-8 bg-slate-900 text-white p-6 shadow-xl"
                >
                  <div className="text-3xl mb-1">100+</div>
                  <div className="text-slate-300 uppercase tracking-wide text-sm">
                    Product Range
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-slate-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl mb-1">98%</div>
                <div className="text-slate-400 uppercase tracking-wider text-xs">
                  Customer Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl mb-1">36</div>
                <div className="text-slate-400 uppercase tracking-wider text-xs">
                  States Covered
                </div>
              </div>
              <div>
                <div className="text-2xl mb-1">24/7</div>
                <div className="text-slate-400 uppercase tracking-wider text-xs">
                  Support Available
                </div>
              </div>
              <div>
                <div className="text-2xl mb-1">50K+</div>
                <div className="text-slate-400 uppercase tracking-wider text-xs">
                  5-Star Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
