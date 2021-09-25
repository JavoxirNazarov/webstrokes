import clsx from "clsx";
import React, { useState } from "react";
import Button from "../../../shared/Button";
import SearchInputBig from "../../../shared/SearchInputBig";
import Wrapper from "../../../shared/Wrapper";
import styles from "./banner.module.css";
import Link from "next/link";
import Logo from "../../../shared/Logo";
import { useRouter } from "next/router";

export default function Banner() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className={styles.banner}>
      <Wrapper>
        <header className={styles.banner_header}>
          <Logo />

          <div className={clsx("row", styles.banner_header_links)}>
            <Link href="/search" passHref>
              <p className={styles.banner_header_link}>Discover</p>
            </Link>
            <p className={styles.banner_header_link}>Create</p>
            <p className={styles.banner_header_link}>Learn</p>
          </div>

          <div className={clsx("row", styles.banner_header_btns)}>
            <Link passHref href="/auth/sign-up">
              <Button text="Sign up" />
            </Link>

            <Link passHref href="/auth/sign-in">
              <Button text="Sign in" outlined />
            </Link>
          </div>
        </header>

        <div className={styles.banner_body}>
          <h1 className={styles.banner_body_title}>
            Ace your study materials.
          </h1>
          <p className={styles.banner_body_subtitle}>
            Discover, create and learn A study materials specific to <br /> your
            course.
          </p>
          <SearchInputBig
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onBtnCkick={() =>
              router.push(`/search/result?searching=${search}`, undefined, {
                shallow: true,
              })
            }
          />
        </div>
      </Wrapper>
    </div>
  );
}
