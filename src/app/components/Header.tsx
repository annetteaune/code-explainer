import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center mb-8 pt-8 space-y-4 md:space-y-0">
      <div className="flex items-center gap-4">
        <div
          className="text-4xl font-bold text-orange-500"
          role="img"
          aria-label="Code Symbol"
        >
          &lt;/&gt;
        </div>
        <h1 className="text-2xl font-bold text-white">Code Explainer</h1>
      </div>

      <p className="text-gray-400 text-center md:text-left">
        Paste your code snippet and get a clear explanation!
      </p>
    </header>
  );
};

export default Header;
