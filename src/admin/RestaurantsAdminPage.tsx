import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


type Restaurant = {
    id: number
    slug: string
    name: string
    excerpt: string | null
    location: string | null
    rating: number | null
    status: 'draft' | 'published'
    visited_date: string | null
    featured_media: {
        url: string
        alt_text: string | null
    } | null
}

export default function RestaurantsAdminPage() {
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

    return (
        <section className="admin-page">
            <Link to="/admin" className="admin-back-link">
                ← Back to Admin
            </Link>
            <div className="admin-header">
                <div>
                    <p className="story-tag">The Food Map</p>
                    <h1>Restaurants</h1>
                    <p>Manage your restaurant reviews and photos.</p>
                </div>

                <Link to="/admin/restaurants/new" className="secondary-button">
                    New restaurant
                </Link>
            </div>

            {loading ? (
                <p>Loading restaurants...</p>
            ) : restaurants.length === 0 ? (
                <div className="admin-card">
                    <h2>No restaurants yet</h2>
                    <p>Create your first restaurant.</p>
                </div>
            ) : (
                <div className="admin-list">
                    {restaurants.map((restaurant) => (
                        <article key={restaurant.id} className="admin-card">
                            <div>
                                {restaurant.featured_media && (
                                    <img
                                        src={restaurant.featured_media.url}
                                        alt={
                                            restaurant.featured_media.alt_text ??
                                            restaurant.name
                                        }
                                    />
                                )}

                                <p className="story-tag">
                                    {restaurant.status}
                                </p>

                                <h2>{restaurant.name}</h2>

                                {restaurant.location && (
                                    <p>{restaurant.location}</p>
                                )}

                                {restaurant.excerpt && (
                                    <p>{restaurant.excerpt}</p>
                                )}
                            </div>

                            <Link
                                to={`/admin/restaurants/${restaurant.slug}`}
                                className="secondary-button"
                            >
                                Edit restaurant
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}