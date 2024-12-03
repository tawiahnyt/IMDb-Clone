/** @format */

import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div>
      <Image className="h-96 items-center" src="/spinner.svg" alt="loading..." width={384} height={384}></Image>
      {/* <img className="h-96" src="/spinner.svg" alt="loading..." /> */}
    </div>
  );
}
