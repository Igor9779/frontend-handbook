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
        <h3>{topic.title}</h3>

        <div className={styles.meta}>
          <span>{"★".repeat(topic.difficulty)}</span>

          <span>{topic.readingTime} min</span>
        </div>
      </div>
    </Card>
  );
}
