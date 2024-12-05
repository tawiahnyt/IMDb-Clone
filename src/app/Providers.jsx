/** @format */

"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import PropTypes from "prop-types";

function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
