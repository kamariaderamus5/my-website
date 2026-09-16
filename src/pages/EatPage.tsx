import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { restaurants } from '../data/content'

export default function EatPage() {
  const [query, setQuery] = useState('')

  const visibleRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return restaurants
    }

    return restaurants.filter((restaurant) => {
      const haystack = `${restaurant.title} ${restaurant.excerpt} ${restaurant.location}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [query])

  return (
    <section className="page-section">
      <div className="eat-page-header-row">
        <PageHeader
          title="The Food Map"
          subtitle="Good food, good stories, & a very good reason to go back"
        />

        <label className="eat-search">
          <span className="sr-only">Search restaurants</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search restaurants"
            aria-label="Search restaurants"
          />
        </label>
      </div>

      <div className="story-grid">
        {visibleRestaurants.map((restaurant) => (
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
