import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { recipes } from '../data/content'

export default function RecipeLibrary() {
  const [selectedSlug, setSelectedSlug] = useState(recipes[0]?.slug ?? '')
  const [query, setQuery] = useState('')

  const visibleRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return recipes
    }

    return recipes.filter((recipe) => {
      const haystack = `${recipe.title} ${recipe.summary} ${recipe.description}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [query])

  const selectedRecipe = useMemo(
    () => visibleRecipes.find((recipe) => recipe.slug === selectedSlug) ?? visibleRecipes[0] ?? recipes[0],
    [selectedSlug, visibleRecipes],
  )

  if (!selectedRecipe) {
    return null
  }

  return (
    <div className="recipe-library">
      <aside className="recipe-library-nav">
        <div className="recipe-library-header-row">
          <p className="eyebrow">Recipe library</p>
          <span className="recipe-count">{recipes.length} recipes</span>
        </div>

        <label className="recipe-search">
          <span className="sr-only">Search recipes</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search recipes"
            aria-label="Search recipes"
          />
        </label>

        <div className="recipe-library-list" aria-label="Recipe library navigation">
          {visibleRecipes.map((recipe) => (
            <button
              key={recipe.slug}
              type="button"
              className={recipe.slug === selectedRecipe.slug ? 'recipe-library-item active' : 'recipe-library-item'}
              onClick={() => setSelectedSlug(recipe.slug)}
            >
              <span>{recipe.title}</span>
              <small>{recipe.summary}</small>
            </button>
          ))}
        </div>
      </aside>

      <div className="recipe-library-detail">
        <img src={selectedRecipe.image} alt={selectedRecipe.title} />
        <div className="recipe-library-copy">
          <p className="story-tag">Selected recipe</p>
          <h3>{selectedRecipe.title}</h3>
          <p>{selectedRecipe.description}</p>
          <div className="recipe-library-actions">
            <Link to={`/cook/${selectedRecipe.slug}`} className="primary-button">
              View recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
