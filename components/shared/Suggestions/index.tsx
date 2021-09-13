import React, { useState } from "react";
import styles from "./suggestions.module.css";
import Image from "next/image";
import Button from "../Button";

export default function Suggestions({
  inputFocused,
}: {
  inputFocused: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  if (hovered || inputFocused) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={styles.suggestions}
      >
        <div></div>
        <div>
          <div>
            <div>
              <p>Universities</p>
              <Button outlined text="Find you university" />
            </div>
            <div />
            {/* <Image width={96} height={96} src="" alt="Illustration" /> */}
          </div>
          <div></div>
        </div>
      </div>
    );
  }

  return null;
}
{
  /* <Link href="/search">aaaa</Link> */
}
