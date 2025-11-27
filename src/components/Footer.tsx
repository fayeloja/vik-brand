import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t-4 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <img src="./bristar-logo.png" alt="Logo" />
              </div>
              <div>
                <div className="uppercase tracking-wide">
                  VIK INDUSTRIES LTD
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Nigeria's premier manufacturer of quality household plastic
              products since 2003.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Storage Containers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kitchen Essentials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Water Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home Organization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lunch & Picnic
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Warranty Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Bristar by Vik Industries Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors uppercase tracking-wide"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase tracking-wide"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
