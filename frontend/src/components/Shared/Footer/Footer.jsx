import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-6 text-gray-400 relative bottom-0 left-0 w-full">
      <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">PlantNet</h3>
          <p className="text-gray-400 text-sm">
            Bringing greenery to your home and office. Quality plants for every
            space.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-md mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-green-500 transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold text-md mb-2">Contact</h4>
          <p className="text-sm">Email: support@plantnet.com</p>
          <p className="text-sm">Phone: +880 123 456 789</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-gray-500 text-sm py-4">
        © 2025-2026 PlantNet Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
