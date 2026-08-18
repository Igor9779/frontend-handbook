import Card from "@/components/ui/Card";

import styles from "./ContinueLearningCard.module.css";

export default function ContinueLearningCard() {
  return (
    <Card>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.label}>Continue learning</p>

          <h3 className={styles.title}>Event Loop</h3>
        </div>

        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>

          <span>80%</span>
        </div>
      </div>
    </Card>
  );
}
