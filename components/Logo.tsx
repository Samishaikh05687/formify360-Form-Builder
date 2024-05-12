import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-purple-900 to-purple-400 bg-clip-text text-transparent  hover:cursor-pointer"
    >
      Formify360
    </Link>
  );
}

export default Logo;