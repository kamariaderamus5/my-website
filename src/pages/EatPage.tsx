import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

type Restaurant = {
  slug: string
  name: string
  excerpt: string | null
  location: string | null
  featured_media: {
    url: string
    alt_text: string | null
  } | null
}

export default function EatPage() {
  const [query, setQuery] = useState('')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const response = await fetch('/api/restaurants')

        if (!response.ok) {
          throw new Error('Failed to load restaurants')
        }

        const data: Restaurant[] = await response.json()
        setRestaurants(data)
      } catch (error) {
        console.error(error)
        setRestaurants([])
      } finally {
        setLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  const visibleRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return restaurants
    }

    return restaurants.filter((restaurant) => {
      const haystack = `${restaurant.name} ${restaurant.excerpt ?? ''} ${restaurant.location ?? ''}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [query, restaurants])

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

      {loading ? (
        <p>Loading restaurants...</p>
      ) : (
        <div className="story-grid">
          {visibleRestaurants.map((restaurant) => (
            <Link
              key={restaurant.slug}
              to={`/eat/${restaurant.slug}`}
              className="story-card link-card"
            >
              {restaurant.featured_media && (
                <img
                  src={restaurant.featured_media.url}
                  alt={restaurant.featured_media.alt_text ?? restaurant.name}
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="story-body">
                <p className="story-tag">Restaurant</p>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}