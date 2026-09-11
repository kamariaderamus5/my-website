import { NavLink } from 'react-router-dom'
import { landingCards, landingFeature } from '../data/content'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">What I’m eating, where I’m going, and what I can’t stop thinking about</p>
          <h1>Food, food, food, and... more food.</h1>
          <p className="lede">
            Restaurant reviews, recipes, and the reasons we remember a meal.
          </p>

          <div className="hero-actions">
            <NavLink to="/eat" className="primary-button">Latest</NavLink>
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
