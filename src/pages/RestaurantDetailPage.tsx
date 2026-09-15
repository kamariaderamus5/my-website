import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { getRestaurantBySlug } from '../data/content'

export default function RestaurantDetailPage() {
  const { slug } = useParams()
  const restaurant = slug ? getRestaurantBySlug(slug) : null

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

  return (
    <section className="page-section">
      <div className="restaurant-detail">
        <img
          src={restaurant.image}
          alt={restaurant.title}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        <div className="restaurant-copy">
          <PageHeader title={restaurant.title} subtitle={restaurant.excerpt} />

          <div className="restaurant-meta">
            <p>
              <strong>Location:</strong> {restaurant.location}
            </p>
            <p>
              <strong>Rating:</strong> {restaurant.rating}
            </p>
          </div>

          <div className="restaurant-links">
            <a href={restaurant.website} target="_blank" rel="noreferrer">
              Website
            </a>
            <a href={restaurant.googleReview} target="_blank" rel="noreferrer">
              My Google Review
            </a>
          </div>

          <div className="restaurant-menu-grid">
            <div>
              <h3>Food Menu</h3>
              <ul>
                {restaurant.foodMenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Drinks</h3>
              <ul>
                {restaurant.drinkMenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/eat" className="secondary-button">
            Back to The Food Map
          </Link>
        </div>
      </div>

      <div className="restaurant-gallery">
        {restaurant.gallery.map((photo) => (
          <figure key={`${restaurant.slug}-${photo.caption}`} className="restaurant-photo">
            <img
              src={photo.image}
              alt={photo.caption}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
