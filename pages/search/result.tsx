import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import ContentHead from "../../components/pages/search/results/ContentHead";
import Item from "../../components/pages/search/results/Item";
import Recents from "../../components/pages/search/results/Recents";
import Sidebar from "../../components/pages/search/results/Sidebar";
import Header from "../../components/shared/Header/Index";
import styles from "../../styles/search.module.css";

export default function Result() {
  const router = useRouter();

  return (
    <MainLayout title="Search Results">
      <Header />
      <div className={styles.results_container}>
        <Sidebar />
        <div className={styles.results_content}>
          <ContentHead searchingText={router.query.searching as string} />

          <Recents />

          <Item title="Elements of Deductive Logic Notes 2016" />
          <Item title="Contract law" />
          <Item title="Elements of Deductive Logic Notes 2016" />
        </div>
      </div>
    </MainLayout>
  );
}
