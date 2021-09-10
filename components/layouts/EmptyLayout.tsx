import React from "react";
import Head from "next/head";

interface IProps {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}

export default function EmptyLayout({ children, title }: IProps) {
  return (
    <>
      <Head>
        <title>Webstrokes | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}
