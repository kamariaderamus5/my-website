import './App.css'

const posts = [
  {
    category: 'Restaurant Review',
    title: 'A neighborhood spot that makes you want to linger.',
    excerpt:
      'Warm bread, great music, and a room that feels like a local secret. This is the kind of place that stays with you.',
    date: 'April 18',
  },
  {
    category: 'Recipes',
    title: 'Crispy potatoes, herbs, and a very good Sunday supper.',
    excerpt:
      'A simple meal with lots of flavor and almost no fuss. This is the cooking I do when I want comfort without stress.',
    date: 'April 24',
  },
  {
    category: 'Journal',
    title: 'What I learned from eating alone in a new neighborhood.',
    excerpt:
      'A solo dinner can be a reset button. I came home with notes, a full stomach, and a new favorite corner of the city.',
    date: 'May 02',
  },
]

const categories = [
  { title: 'Restaurant Reviews', text: 'Places, plates, and the details that make a meal worth remembering.' },
  { title: 'Home Cooking', text: 'Recipes, experiments, and the joy of cooking for people I love.' },
  { title: 'Life Notes', text: 'Travel, routines, and the stories that happen between bites.' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <div>
            <p className="brand-name">Mara Lane</p>
            <p className="brand-subtitle">food, stories, and slow living</p>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#reviews">Reviews</a>
          <a href="#recipes">Recipes</a>
          <a href="#journal">Journal</a>
          <a href="#about">About</a>
        </nav>

        <button type="button" className="nav-button">
          Follow along
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">weekly notes from my kitchen and the city</p>
            <h1>Stories about meals worth remembering.</h1>
            <p className="lede">
              I write restaurant reviews, cook from the heart, and collect the little
              details that make food feel personal.
            </p>

            <div className="hero-actions">
              <a href="#reviews" className="primary-button">
                Read the latest
              </a>
              <a href="#about" className="secondary-button">
                About me
              </a>
            </div>

            <ul className="stats" aria-label="Blog statistics">
              <li>
                <strong>18</strong>
                <span>Cities explored</span>
              </li>
              <li>
                <strong>74</strong>
                <span>Reviews</span>
              </li>
              <li>
                <strong>112</strong>
                <span>Recipes tested</span>
              </li>
            </ul>
          </div>

          <aside className="featured-card">
            <div className="featured-image" aria-label="Featured article image" />
            <div className="featured-copy">
              <p className="card-tag">Featured essay</p>
              <h2>The kind of dinner that makes you stay an hour longer.</h2>
              <p>
                Candlelight, a loud room, and a meal that felt like a story unfolding from the first bite.
              </p>
            </div>
          </aside>
        </section>

        <section id="reviews" className="section-block">
          <div className="section-header">
            <div>
              <p className="eyebrow">Latest</p>
              <h2>Recent notes</h2>
            </div>
            <a href="#" className="view-all">View all posts</a>
          </div>

          <div className="post-grid">
            {posts.map((post) => (
              <article key={post.title} className="post-card">
                <p className="card-tag">{post.category}</p>
                <h3>{post.title}</h3>
                <div className="post-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
                <p>{post.excerpt}</p>
                <a href="#" className="text-link">Read story</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-header">
            <div>
              <p className="eyebrow">What I write about</p>
              <h2>Three kinds of stories</h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.title} className="category-card">
                <p className="category-label">Essays</p>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>Food, place, and the stories that come with both.</h2>
            <p>
              I’m a writer and home cook who notices the details: the room, the service,
              the way a dish changes the mood of an evening, and the kind of comfort that
              only comes from a thoughtful meal.
            </p>
          </div>

          <blockquote className="quote-card">
            “The best meals are rarely the fanciest ones. They’re the ones that stay with you.”
          </blockquote>
        </section>
      </main>
    </div>
  )
}

export default App
