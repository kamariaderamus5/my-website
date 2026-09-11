import { NavLink } from 'react-router-dom'
import { landingCards, landingFeature } from '../data/content'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Kitchen notes, city walks, and favorite tables</p>
          <h1>Food, food, food, and... more food.</h1>
          <p className="lede">
            Restaurant reviews, recipes, and the small details that make a meal feel like a memory.
          </p>

          <div className="hero-actions">
            <NavLink to="/eat" className="primary-button">Read latest</NavLink>
            <NavLink to="/about" className="secondary-button">About</NavLink>
          </div>
        </div>

        <div className="feature-spotlight">
          <img src={landingFeature.image} alt={landingFeature.title} />
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <p className="eyebrow">Explore</p>
          <h2>Eat, Cook, Wander</h2>
        </div>

        <div className="card-grid">
          {landingCards.map((card) => (
            <NavLink key={card.title} to={card.to} className="feature-card">
              <img src={card.image} alt={card.title} />
              <div className="card-copy">
                <span>{card.title}</span>
                <p>{card.description}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  )
}
