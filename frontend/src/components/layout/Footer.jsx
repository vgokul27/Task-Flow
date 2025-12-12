import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import NeonText from "../common/NeonText";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features" },
      { name: "Pricing" },
      { name: "Integrations" },
      { name: "Updates" },
    ],
    company: [
      { name: "About Us" },
      { name: "Careers" },
      { name: "Blog" },
      { name: "Contact" },
    ],
    resources: [
      { name: "Documentation" },
      { name: "Help Center" },
      { name: "API Reference" },
      { name: "Community" },
    ],
  };

  return (
    <motion.footer
      className="glass border-t border-indigo-500/10 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">T</span>
              </div>
              <NeonText className="text-xl font-bold">TaskFlow</NeonText>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Modern task management platform with authentication, real-time
              updates, and beautiful UI powered by React & Framer Motion.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.button
                  key={index}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-indigo-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-400 hover:text-indigo-400 text-sm transition-colors cursor-pointer">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-400 hover:text-indigo-400 text-sm transition-colors cursor-pointer">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-400 hover:text-indigo-400 text-sm transition-colors cursor-pointer">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} TaskFlow. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TailwindCSS & Framer Motion by Gokul
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
