import { useRouter } from "next/router";
import React from "react";

export default function Results() {
  const router = useRouter();

  return <div>{router.query.text}</div>;
}
