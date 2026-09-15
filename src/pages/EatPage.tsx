import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { restaurants } from '../data/content'

export default function EatPage() {
  return (
    <section className="page-section">
      <PageHeader
        title="The Food Map"
        subtitle="Good food, good stories, & a very good reason to go back"
      />

      <div className="story-grid">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.slug} to={`/eat/${restaurant.slug}`} className="story-card link-card">
            <img src={restaurant.image} alt={restaurant.title} loading="lazy" decoding="async" />
            <div className="story-body">
              <p className="story-tag">Restaurant</p>
              <h3>{restaurant.title}</h3>
              <p>{restaurant.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
