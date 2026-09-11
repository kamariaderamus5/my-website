import PageHeader from '../components/PageHeader'
import StoryCard from '../components/StoryCard'
import { reviews } from '../data/content'

export default function EatPage() {
  return (
    <section className="page-section">
      <PageHeader title="Good food, good stories, & a very good reason to go back" />

      <div className="story-grid">
        {reviews.map((review) => (
          <StoryCard
            key={review.title}
            image={review.image}
            title={review.title}
            summary={review.excerpt}
            tag="Review"
          />
        ))}
      </div>
    </section>
  )
}
