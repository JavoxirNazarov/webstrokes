import React from "react";
import Head from "next/head";
import Header from "../shared/Header/Index";

interface IProps {
  title: string;
  children: React.ReactChild | React.ReactChild[];
  withSearch?: boolean;
  withDiscoverBtn?: boolean;
}

export default function MainLayout({
  children,
  title,
  withSearch = false,
  withDiscoverBtn = false,
}: IProps) {
  return (
    <>
      <Head>
        <title>Webstrokes | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header withSearch={withSearch} withDiscoverBtn={withDiscoverBtn} />
      {children}
    </>
  );
}
