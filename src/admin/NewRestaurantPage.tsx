import { Link } from 'react-router-dom'

export default function NewRestaurantPage() {
  return (
    <section className="admin-page">
      <Link to="/admin/restaurants" className="admin-back-link">
        ← Back to Restaurants
      </Link>

      <div className="admin-header">
        <div>
          <p className="story-tag">The Food Map</p>
          <h1>New Restaurant</h1>
          <p>Create a new restaurant review.</p>
        </div>
      </div>

      <form className="admin-form">
        <div className="admin-form-section">
          <p className="story-tag">Basic information</p>

          <div className="admin-form-grid">
            <label>
              <span>Restaurant name</span>
              <input type="text" name="name" />
            </label>

            <label>
              <span>Location</span>
              <input type="text" name="location" />
            </label>

            <label>
              <span>Date visited</span>
              <input type="date" name="visited_date" />
            </label>

            <label>
              <span>Rating</span>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="0.1"
              />
            </label>
          </div>

          <label>
            <span>Excerpt</span>
            <textarea name="excerpt" rows={3} />
          </label>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Links</p>

          <div className="admin-form-grid">
            <label>
              <span>Restaurant website</span>
              <input type="url" name="website_url" />
            </label>

            <label>
              <span>Menu</span>
              <input type="url" name="menu_url" />
            </label>

            <label>
              <span>My Google Review</span>
              <input type="url" name="google_review_url" />
            </label>

            <label>
              <span>Google rating</span>
              <input
                type="number"
                name="google_rating"
                min="0"
                max="5"
                step="0.1"
              />
            </label>
          </div>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Review</p>

          <label>
            <span>Review</span>
            <textarea name="review" rows={10} />
          </label>
        </div>

        <div className="admin-form-section">
          <p className="story-tag">Photos</p>

          <div className="admin-upload-placeholder">
            <p>Featured photo</p>
            <input type="file" accept="image/*" />
          </div>

          <div className="admin-upload-placeholder">
            <p>Gallery photos</p>
            <input type="file" accept="image/*" multiple />
          </div>
        </div>

        <div className="admin-form-actions">
          <button type="button" className="secondary-button">
            Save draft
          </button>

          <button type="button" className="secondary-button">
            Publish
          </button>
        </div>
      </form>
    </section>
  )
}