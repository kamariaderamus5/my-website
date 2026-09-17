import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

type RestaurantMedia = {
  id: number
  r2_key: string
  media_type: string
  alt_text: string | null
  url: string | null
}

type Restaurant = {
  id: number
  slug: string
  name: string
  excerpt: string | null
  location: string | null
  rating: number | null
  website_url: string | null
  menu_url: string | null
  google_review_url: string | null
  google_rating: number | null
  review: string | null
  status: 'draft' | 'published'
  visited_date: string | null
  featured_media: RestaurantMedia | null
}

type RestaurantResponse = Restaurant & {
  featured_r2_key?: string | null
  featured_media_type?: string | null
  featured_alt_text?: string | null
}

export default function EditRestaurantPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [restaurant, setRestaurant] =
    useState<RestaurantResponse | null>(null)

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    name: '',
    location: '',
    visited_date: '',
    rating: '',
    excerpt: '',
    website_url: '',
    menu_url: '',
    google_review_url: '',
    google_rating: '',
    review: '',
    status: 'draft' as 'draft' | 'published',
  })

  useEffect(() => {
    async function loadRestaurant() {
      try {
        const response = await fetch('/api/admin/restaurants')

        if (!response.ok) {
          throw new Error('Failed to load restaurant.')
        }

        const restaurants =
          (await response.json()) as RestaurantResponse[]

        const match = restaurants.find(
          (item) => item.slug === slug,
        )

        if (!match) {
          throw new Error('Restaurant not found.')
        }

        setRestaurant(match)

        setForm({
          name: match.name ?? '',
          location: match.location ?? '',
          visited_date: match.visited_date ?? '',
          rating:
            match.rating !== null && match.rating !== undefined
              ? String(match.rating)
              : '',
          excerpt: match.excerpt ?? '',
          website_url: match.website_url ?? '',
          menu_url: match.menu_url ?? '',
          google_review_url:
            match.google_review_url ?? '',
          google_rating:
            match.google_rating !== null &&
            match.google_rating !== undefined
              ? String(match.google_rating)
              : '',
          review: match.review ?? '',
          status: match.status,
        })
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadRestaurant()
  }, [slug])

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (!restaurant) {
      return
    }

    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch(
        `/api/admin/restaurants/${restaurant.id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            location: form.location,
            visited_date: form.visited_date,
            rating: form.rating
              ? Number(form.rating)
              : null,
            excerpt: form.excerpt,
            website_url: form.website_url,
            menu_url: form.menu_url,
            google_review_url:
              form.google_review_url,
            google_rating: form.google_rating
              ? Number(form.google_rating)
              : null,
            review: form.review,
            status: form.status,
          }),
        },
      )

      const data = (await response.json()) as {
        error?: string
      }

      if (!response.ok) {
        throw new Error(
          data.error ?? 'Failed to update restaurant.',
        )
      }

      setSuccess('Restaurant updated.')

      setTimeout(() => {
        navigate('/admin/restaurants')
      }, 700)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong.',
      )
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <section className="admin-page">
        <p>Loading restaurant...</p>
      </section>
    )
  }

  if (!restaurant) {
    return (
      <section className="admin-page">
        <Link
          to="/admin/restaurants"
          className="admin-back-link"
        >
          ← Back to Restaurants
        </Link>

        <h1>Restaurant not found</h1>

        {error && <p role="alert">{error}</p>}
      </section>
    )
  }

  return (
    <section className="admin-page">
      <Link
        to="/admin/restaurants"
        className="admin-back-link"
      >
        ← Back to Restaurants
      </Link>

      <div className="admin-header">
        <div>
          <p className="story-tag">The Food Map</p>
          <h1>Edit Restaurant</h1>
          <p>{restaurant.name}</p>
        </div>

        <span className="admin-status">
          {form.status}
        </span>
      </div>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >
        <div className="admin-form-section">
          <p className="story-tag">Basic information</p>

          <div className="admin-form-grid">
            <label>
              <span>Restaurant name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) =>
                  updateField(
                    'name',
                    event.target.value,
                  )
                }
                required
              />
            </label>

            <label>
              <span>Location</span>
              <input
                type="text"
                value={form.location}
                onChange={(event) =>
                  updateField(
                    'location',
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>Date visited</span>
              <input
                type="date"
                value={form.visited_date}
                onChange={(event) =>
                  updateField(
                    'visited_date',
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>Rating</span>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={form.rating}
                onChange={(event) =>
                  updateField(
                    'rating',
                    event.target.value,
                  )
                }
              />
            </label>
          </div>

          <label>
            <span>Excerpt</span>
            <textarea
              rows={3}
              value={form.excerpt}
              onChange={(event) =>
                updateField(
                  'excerpt',
                  event.target.value,
                )
              }
            />
          </label>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Links</p>

          <div className="admin-form-grid">
            <label>
              <span>Restaurant website</span>
              <input
                type="url"
                value={form.website_url}
                onChange={(event) =>
                  updateField(
                    'website_url',
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>Menu</span>
              <input
                type="url"
                value={form.menu_url}
                onChange={(event) =>
                  updateField(
                    'menu_url',
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>My Google Review</span>
              <input
                type="url"
                value={form.google_review_url}
                onChange={(event) =>
                  updateField(
                    'google_review_url',
                    event.target.value,
                  )
                }
              />
            </label>

            <label>
              <span>Google rating</span>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={form.google_rating}
                onChange={(event) =>
                  updateField(
                    'google_rating',
                    event.target.value,
                  )
                }
              />
            </label>
          </div>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Review</p>

          <label>
            <span>Review</span>
            <textarea
              rows={12}
              value={form.review}
              onChange={(event) =>
                updateField(
                  'review',
                  event.target.value,
                )
              }
            />
          </label>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Featured photo</p>

          {restaurant.featured_media?.url && (
            <img
              src={restaurant.featured_media.url}
              alt={
                restaurant.featured_media.alt_text ??
                restaurant.name
              }
              className="admin-featured-image"
            />
          )}

          <div className="admin-upload-placeholder">
            <p>Replace featured photo</p>
            <input
              type="file"
              accept="image/*"
            />
          </div>
        </div>

        {error && (
          <p role="alert">{error}</p>
        )}

        {success && (
          <p role="status">{success}</p>
        )}

        <div className="admin-form-actions">
          <button
            type="submit"
            className="secondary-button"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save changes'}
          </button>
        </div>
      </form>
    </section>
  )
}