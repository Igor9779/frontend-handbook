import Card from "@/components/ui/Card";
import type { Category } from "@/types/content";

import styles from "./CategoryCard.module.css";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Card>
      <div className={styles.wrapper}>
        <span
          className={styles.color}
          style={{ backgroundColor: category.color }}
        />

        <h3>{category.title}</h3>
      </div>
    </Card>
  );
}
