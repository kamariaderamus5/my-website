import PageHeader from '../components/PageHeader'
import RecipeLibrary from '../components/RecipeLibrary'
import { recipes } from '../data/content'

export default function CookPage() {
  const featuredRecipe = recipes[0]

  return (
    <section className="page-section">
      <PageHeader title="Recipes & kitchen notes." />

      <div className="highlight-row">
        <div className="highlight-card highlight-large">
          <img src={featuredRecipe.image} alt={featuredRecipe.title} loading="lazy" decoding="async" />
          <div>
            <p className="story-tag">Featured</p>
            <h3>{featuredRecipe.title}</h3>
            <p>{featuredRecipe.summary}</p>
          </div>
        </div>
      </div>

      <RecipeLibrary />
    </section>
  )
}
