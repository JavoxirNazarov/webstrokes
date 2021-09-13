import React, { ChangeEvent, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Banner from "../../components/pages/subjects/Banner";
import SearchInput from "../../components/shared/SearchInput";
import Wrapper from "../../components/shared/Wrapper";

export default function Index() {
  const [search, setSearch] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <MainLayout withSearch withDiscoverBtn title="Subjects">
      <Banner title="All subjects" />
      <Wrapper withPadding>
        <SearchInput
          value={search}
          onChange={handleText}
          clearIconClick={() => {}}
          placeholder="Search by name"
        />
      </Wrapper>
    </MainLayout>
  );
}
