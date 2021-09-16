import clsx from "clsx";
import React from "react";
import styles from "./listBlock.module.css";
import Link from "next/link";

interface IProps {
  children?: any;
  link: string;
  containerClassName?: string;
  footerElement?: any;
}

export default function LinkBlock({
  children,
  link,
  containerClassName,
  footerElement,
}: IProps) {
  return (
    <Link passHref href={link}>
      <div className={clsx(containerClassName)}>
        <div className={styles.block}>{children}</div>
        {footerElement}
      </div>
    </Link>
  );
}
