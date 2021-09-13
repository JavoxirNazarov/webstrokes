import clsx from "clsx";
import React from "react";
import styles from "./listBlock.module.css";
import Link from "next/link";

interface IProps {
  children?: any;
  link: string;
  blockClassName?: string;
  containerClassName?: string;
  footerElement?: any;
}

export default function LinkBlock({
  children,
  link,
  blockClassName,
  containerClassName,
  footerElement,
}: IProps) {
  return (
    <Link passHref href={link}>
      <div className={containerClassName}>
        <div className={clsx(styles.block, blockClassName)}>{children}</div>
        {footerElement}
      </div>
    </Link>
  );
}
