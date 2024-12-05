/** @format */

"use client";

import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function ErrorMessage({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

