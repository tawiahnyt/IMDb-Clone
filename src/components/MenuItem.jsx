/** @format */

import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
