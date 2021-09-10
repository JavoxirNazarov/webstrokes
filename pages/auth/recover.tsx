import clsx from "clsx";
import React from "react";
import Button from "../../components/shared/Button";
import Logo from "../../components/shared/Logo";
import styles from "../../styles/auth.module.css";
import Link from "next/link";
import EmptyLayout from "../../components/layouts/EmptyLayout";

export default function SignIn() {
  return (
    <EmptyLayout title="Recover">
      <div className={styles.auth_container}>
        <div className={clsx(styles.auth_container_col, styles.auth_main)}>
          <header className={styles.auth_main_header}>
            <Logo />

            <Link href="/auth/sign-in" replace passHref>
              <Button outlined text="Sign In" />
            </Link>
          </header>

          <div className={styles.auth_main_block}>
            <h1 className={styles.auth_main_title}>Recover password</h1>
            <input
              className={styles.auth_main_input}
              type="text"
              placeholder="Email"
            />

            <div className={styles.auth_main_btns}>
              <Button
                text="Send password recovery email "
                btnClassName={styles.auth_main_btn}
              />
            </div>
          </div>
        </div>
        <div className={clsx(styles.auth_container_col, styles.auth_img)}></div>
      </div>
    </EmptyLayout>
  );
}
