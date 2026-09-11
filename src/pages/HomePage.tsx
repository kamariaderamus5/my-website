import { NavLink } from 'react-router-dom'
import { landingCards, landingFeature } from '../data/content'

export default function HomePage() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-copy">
                    <h1 className="signature">By Kamaria</h1>
                    <br />
                    <h2>Restaurants, Recipes,
                        & Everything In Between</h2>
                    <p className="lede">
                        A collection of meals, adventures,
                        and things that bring me joy.
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
