import clsx from "clsx";
import React from "react";
import Button from "../../components/shared/Button";
import Logo from "../../components/shared/Logo";
import styles from "../../styles/auth.module.css";
import Link from "next/link";
import EmptyLayout from "../../components/layouts/EmptyLayout";
// import AuthModal from "../../components/pages/auth/Modal";

export default function SignIn() {
  return (
    <EmptyLayout title="Sign In">
      <div className={styles.auth_container}>
        <div className={clsx(styles.auth_container_col, styles.auth_main)}>
          <header className={styles.auth_main_header}>
            <Logo />

            <Link href="/auth/sign-up" replace passHref>
              <Button outlined text="Sign Up" />
            </Link>
          </header>

          {/* <AuthModal /> */}

          <div className={styles.auth_main_block}>
            <h1 className={styles.auth_main_title}>Sign in</h1>
            <input
              className={styles.auth_main_input}
              type="text"
              placeholder="Email"
            />
            <input
              className={styles.auth_main_input}
              type="text"
              placeholder="Password"
            />

            <Link href="/auth/recover" passHref>
              <p className={styles.auth_main_forget}>Forgot password</p>
            </Link>

            <div className={styles.auth_main_btns}>
              <Button text="Sign in" btnClassName={styles.auth_main_btn} />
            </div>
            <div className={styles.auth_main_btns}>
              <Button
                btnClassName={styles.auth_main_btn}
                text="Apple ID sign in"
              />
              <Button
                btnClassName={styles.auth_main_btn}
                text="Google sign in"
              />
            </div>
          </div>
        </div>
        <div className={clsx(styles.auth_container_col, styles.auth_img)}></div>
      </div>
    </EmptyLayout>
  );
}
