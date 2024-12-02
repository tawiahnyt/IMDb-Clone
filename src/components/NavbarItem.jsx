/** @format */

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2
        ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decration-4 decoration-amber-500 rounder-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
