import type { ReactNode } from "react";

import styles from "./Section.module.css";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>{children}</div>
    </section>
  );
}
