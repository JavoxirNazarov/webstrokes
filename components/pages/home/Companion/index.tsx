import React from "react";
import Wrapper from "../../../shared/Wrapper";
import styles from "./companion.module.css";
import CompanionBlock from "./CompanionBlock";

export default function Companion() {
  return (
    <Wrapper withPadding>
      <h2 className={styles.companion_heading}>Your study companion</h2>
      <p className={styles.companion_subheading}>
        Discover over 60,000 summary notes, lecture notes and <br /> flashcards
        written by similar students on your course.
      </p>
      <CompanionBlock
        title="Discover"
        btnArr={[{ btnText: "Discover study materials", link: "" }]}
      />
      <CompanionBlock
        reversed
        title="Create"
        btnArr={[{ btnText: "Create flashcard", link: "" }]}
      />
      <CompanionBlock
        title="Learn"
        btnArr={[
          { btnText: "Create study pack", link: "" },
          { btnText: "Learn", link: "" },
        ]}
      />
    </Wrapper>
  );
}
