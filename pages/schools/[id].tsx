import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

export default function School() {
  const route = useRouter();

  return (
    <MainLayout title="School">
      <div>{route.query.id}</div>
    </MainLayout>
  );
}
