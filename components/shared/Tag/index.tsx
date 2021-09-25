import clsx from "clsx";
import React from "react";
import styles from "./tag.module.css";
import Link from "next/link";

interface IProps {
  text: string;
  className?: string;
  href?: string;
}

export default function Tag({ text, className, href = "" }: IProps) {
  return (
    <Link href={href} passHref>
      <a className={clsx(styles.tag, className)}>{text}</a>
    </Link>
  );
}
