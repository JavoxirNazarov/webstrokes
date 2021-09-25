import React, { ChangeEvent, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Banner from "../../components/pages/subjects/Banner";
import Category from "../../components/pages/subjects/Category";
import Header from "../../components/shared/Header/Index";
import Wrapper from "../../components/shared/Wrapper";
import styles from "../../styles/subjects.module.css";

export default function Index() {
  const [search, setSearch] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearText = (e: any) => {
    setSearch("");
    e.stopPropagation();
  };

  return (
    <MainLayout title="Subjects">
      <Header />
      <Banner title="All subjects" />
      <Wrapper withPadding wrapperClassName={styles.container}>
        <Category title="Study category 1" />
        <Category title="Study category 1" />
        <Category title="Study category 1" />
      </Wrapper>
    </MainLayout>
  );
}
