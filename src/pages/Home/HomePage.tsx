import ContinueLearningCard from "@/components/home/ContinueLearningCard";
import CategoryCard from "@/components/category/CategoryCard";
import TopicCard from "@/components/topic/TopicCard";
import Section from "@/components/ui/Section";

import { categories } from "@/content/categories";
import { popularTopics } from "@/content/topics";

export default function HomePage() {
  return (
    <>
      <Section title="Continue Learning">
        <ContinueLearningCard />
      </Section>

      <Section title="Popular Topics">
        {popularTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </Section>

      <Section title="Categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Section>
    </>
  );
}
