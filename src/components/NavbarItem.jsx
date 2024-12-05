/** @format */

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import PropTypes from "prop-types";

// NavbarItem component
function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2
        ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-md"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
};

// Wrapper component that adds Suspense
export default function NavbarItemWrapper(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItem {...props} />
    </Suspense>
  );
}
