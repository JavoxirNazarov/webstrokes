import clsx from "clsx";
import React, { useState } from "react";
import Button from "../../components/shared/Button";
import Logo from "../../components/shared/Logo";
import styles from "../../styles/auth.module.css";
import Link from "next/link";
import CheckBox from "../../components/shared/CheckBox";
import EmptyLayout from "../../components/layouts/EmptyLayout";

export default function SignIUp() {
  const [agree, setAgree] = useState(false);

  return (
    <EmptyLayout title="Sign Up">
      <div className={styles.auth_container}>
        <div className={clsx(styles.auth_container_col, styles.auth_main)}>
          <header className={styles.auth_main_header}>
            <Logo />
            <Link href="/auth/sign-in" replace passHref>
              <Button outlined text="Sign In" />
            </Link>
          </header>

          <div className={styles.auth_main_block}>
            <h1 className={styles.auth_main_title}>Sign Up</h1>
            <input
              className={styles.auth_main_input}
              type="text"
              placeholder="Name"
            />
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
            <input
              className={styles.auth_main_input}
              type="text"
              placeholder="Repeat password"
            />

            <p className={styles.auth_main_forget}>
              <CheckBox
                checkBoxClassName={styles.privacy_checkbox}
                checked={agree}
                onClick={setAgree}
              />
              I agree with Privacy Policy ...
            </p>

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
