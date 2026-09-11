import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { getRecipeBySlug } from '../data/content'

export default function RecipeDetailPage() {
  const { slug } = useParams()
  const recipe = slug ? getRecipeBySlug(slug) : null

  if (!recipe) {
    return (
      <section className="page-section">
        <PageHeader title="Recipe not found." />
        <p>That recipe isn’t in the library yet.</p>
        <Link to="/cook" className="secondary-button">
          Back to recipes
        </Link>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="recipe-detail">
        <img src={recipe.image} alt={recipe.title} />

        <div>
          <PageHeader title={recipe.title} />
          <p>{recipe.description}</p>

          <h3>Ingredients</h3>
          <ul className="recipe-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <h3>Method</h3>
          <div className="recipe-steps">
            {recipe.steps.map((step, index) => (
              <p key={step}>
                <strong>{index + 1}.</strong> {step}
              </p>
            ))}
          </div>

          <Link to="/cook" className="secondary-button">
            Back to recipes
          </Link>
        </div>
      </div>
    </section>
  )
}
