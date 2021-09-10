import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <span className="logo">studyprep</span>
    </Link>
  );
}
