import { OmniLogo } from "./OmniLogo";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between flex-wrap gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <OmniLogo width={24} height={24} />
              </div>
              <span className="text-xl font-bold text-white-800">OMNI+</span>
            </div>
            <p className="text-gray-400">OMNI+ — from nature, for nature</p>
            <p className="mt-2 text-gray-400">
              Contact us:{" "}
              <a
                href="mailto:info@omni-plus.com"
                className="text-white hover:underline"
              >
                omniplusua@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#global-challenge"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Challenge
                </a>
              </li>
              <li>
                <a
                  href="#global-mission"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Mission
                </a>
              </li>
              <li>
                <a
                  href="#human-benefits"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Human Benefits
                </a>
              </li>
              <li>
                <a
                  href="#omni-plus"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Omni Plus
                </a>
              </li>

              <li>
                <a
                  href="#contact-order"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Omni +. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">f</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">X</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">in</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
