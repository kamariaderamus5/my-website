import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

type RestaurantMedia = {
  id: number
  r2_key: string
  media_type: string
  alt_text: string | null
  caption: string | null
  sort_order: number
  url: string
}

type Restaurant = {
  id: number
  slug: string
  name: string
  excerpt: string | null
  location: string | null
  rating: number | null
  website_url: string | null
  google_review_url: string | null
  featured_media: RestaurantMedia | null
  gallery: RestaurantMedia[]
}

export default function RestaurantDetailPage() {
  const { slug } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRestaurant() {
      try {
        const response = await fetch('/api/restaurants')

        if (!response.ok) {
          throw new Error('Failed to load restaurants')
        }

        const restaurants: Restaurant[] = await response.json()

        const match = restaurants.find((item) => item.slug === slug) ?? null

        setRestaurant(match)
      } catch (error) {
        console.error(error)
        setRestaurant(null)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurant()
  }, [slug])

  if (loading) {
    return (
      <section className="page-section">
        <PageHeader title="Loading..." />
      </section>
    )
  }

  if (!restaurant) {
    return (
      <section className="page-section">
        <PageHeader title="Restaurant not found." />
        <p>That spot isn’t on the map yet.</p>
        <Link to="/eat" className="secondary-button">
          Back to The Food Map
        </Link>
      </section>
    )
  }

  const featuredImage = restaurant.featured_media ?? restaurant.gallery[0]

  return (
    <section className="page-section">
      <div className="restaurant-detail">
        {featuredImage && (
          <img
            src={featuredImage.url}
            alt={featuredImage.alt_text ?? restaurant.name}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        )}

        <div className="restaurant-copy">
          <PageHeader
            title={restaurant.name}
            subtitle={restaurant.excerpt ?? undefined}
          />

          <div className="restaurant-meta">
            {restaurant.location && (
              <p>
                <strong>Location:</strong> {restaurant.location}
              </p>
            )}

            {restaurant.rating !== null && (
              <p>
                <strong>Rating:</strong> {restaurant.rating}/5
              </p>
            )}
          </div>

          <div className="restaurant-links">
            {restaurant.website_url && (
              <a
                href={restaurant.website_url}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            )}

            {restaurant.google_review_url && (
              <a
                href={restaurant.google_review_url}
                target="_blank"
                rel="noreferrer"
              >
                My Google Review
              </a>
            )}
          </div>

          <Link to="/eat" className="secondary-button">
            Back to The Food Map
          </Link>
        </div>
      </div>

      <div className="restaurant-gallery">
        {restaurant.gallery.map((photo) => (
          <figure
            key={`${restaurant.slug}-${photo.id}`}
            className="restaurant-photo"
          >
            <img
              src={photo.url}
              alt={photo.alt_text ?? photo.caption ?? restaurant.name}
              loading="lazy"
              decoding="async"
            />
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}