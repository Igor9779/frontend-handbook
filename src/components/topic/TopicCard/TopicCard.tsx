import Card from "@/components/ui/Card";
import type { Topic } from "@/types/content";

import styles from "./TopicCard.module.css";

type Props = {
  topic: Topic;
};

export default function TopicCard({ topic }: Props) {
  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.stars}>{"★".repeat(topic.difficulty)}</div>

        <h3 className={styles.title}>{topic.title}</h3>

        <span className={styles.time}>⏱ {topic.readingTime} мин</span>
      </div>
    </Card>
  );
}
