import { Link } from 'react-router-dom'

export default function AdminPage() {
  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <p className="story-tag">Admin</p>
          <h1>By Kamaria Admin</h1>
          <p>Manage your content.</p>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <div>
            <p className="story-tag">The Food Map</p>
            <h2>Restaurants</h2>
            <p>Create, edit, and publish your restaurant reviews.</p>
          </div>

          <Link to="/admin/restaurants" className="secondary-button">
            Manage restaurants
          </Link>
        </div>

        <div className="admin-card">
          <div>
            <p className="story-tag">In the Kitchen</p>
            <h2>Recipes</h2>
            <p>Create and manage your recipes.</p>
          </div>

          <button type="button" className="secondary-button" disabled>
            Coming next
          </button>
        </div>

        <div className="admin-card">
          <div>
            <p className="story-tag">Getaways</p>
            <h2>Getaways</h2>
            <p>Create and manage your travel stories.</p>
          </div>

          <button type="button" className="secondary-button" disabled>
            Coming next
          </button>
        </div>
      </div>
    </section>
  )
}