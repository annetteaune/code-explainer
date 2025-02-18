import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 bg-[#121212]">
      <nav aria-label="Footer Navigation">
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://annetteaune.com"
              className="hover:text-white transition-colors"
              target="_blank"
              aria-label="Contact the developer"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://github.com/annetteaune/code-explainer"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
      <p> {new Date().getFullYear()} </p>
    </footer>
  );
};

export default Footer;
