import heroImage from '../assets/kamaria/Kamaria2.jpeg'
import aboutImage from '../assets/kamaria/Kamaria3.jpeg'
import eatImage from '../assets/restaurants/destin2026-1.jpeg'
import recipeImage from '../assets/recipes/Poke.jpeg'
import wanderImage from '../assets/restaurants/phoenix2026-1.jpeg'

export { heroImage, aboutImage, eatImage, recipeImage, wanderImage }

export type ReviewItem = {
  title: string
  excerpt: string
  image: string
}

export type RecipeItem = {
  title: string
  slug: string
  summary: string
  image: string
  description: string
  ingredients: string[]
  steps: string[]
}

export const landingFeature = {
  title: 'A long dinner in the city that turned into a story',
  subtitle: 'Latest outing',
  image: heroImage,
}

export const landingCards = [
  {
    title: 'Last Night At',
    description: 'Reviews, favorite tables, and neighborhood notes.',
    image: eatImage,
    to: '/eat',
  },
  {
    title: 'Currently Cooking',
    description: 'Recipes, experiments, and the meals I keep returning to.',
    image: recipeImage,
    to: '/cook',
  },
  {
    title: "Next Weekend's Escape",
    description: 'Travel notes, streets, and the in-between moments.',
    image: wanderImage,
    to: '/wander',
  },
]

export const reviews: ReviewItem[] = [
  {
    title: 'Casa de Luz',
    excerpt: 'Slow, warm, and exactly the kind of place that feels lived in.',
    image: eatImage,
  },
  {
    title: 'Harbor Table',
    excerpt: 'A bright room, honest cooking, and a menu built around rhythm.',
    image: eatImage,
  },
  {
    title: 'The Olive Room',
    excerpt: 'A neighborhood favorite with a lot of charm and a lot of heart.',
    image: eatImage,
  },
]

const recipeCatalogSeed = [
  ['Poke Bowl', 'Bright, fresh, and deeply satisfying.', 'A fresh, glossy bowl with soft rice, crisp vegetables, and a clean savory finish that feels easy and alive.'],
  ['Slow Bolognese', 'Rich, savory, and made for a long slow evening.', 'A deeply savory pasta sauce built with onion, carrot, celery, and slow-cooked tomato, finished with a little cream and plenty of black pepper.'],
  ['Pho Stock', 'Clear, aromatic, and a little bit of patience.', 'A layered stock built from bones, onion, ginger, and warm spices that turns into something deeply comforting and fragrant.'],
  ['Crispy Tofu Rice', 'Crunchy edges, warm grains, and a little heat.', 'Golden tofu and warm rice layered with cucumber and chili crisp for an easy, satisfying dinner.'],
  ['Lemon Herb Pasta', 'Simple, green, and bright enough for late summer.', 'A silky pasta with lemon zest, herbs, and a bit of butter that tastes like a porch dinner.'],
  ['Coconut Curry Noodles', 'Creamy, fragrant, and made to linger over.', 'A mellow coconut broth with noodles, greens, and spice that sits right in the comfort zone.'],
  ['Maple Roast Carrots', 'Sweet, sharp, and caramelized at the edges.', 'Roasted carrots with maple, cumin, and herbs that make an easy side feel important.'],
  ['Miso Mushroom Toast', 'Savory and soft with a little umami sparkle.', 'A quick toast layered with mushrooms, miso butter, and greens for a winter morning bite.'],
  ['Garden Frittata', 'A little breakfast, a little lunch, always useful.', 'Eggs baked with greens, herbs, and a bit of cheese until soft and golden.'],
  ['Citrus Salmon', 'Fresh, bright, and effortless.', 'Salmon roasted with citrus and herbs until the edges crisp and the center stays tender.'],
  ['Herbed Chickpea Salad', 'Lean, green, and full of texture.', 'Chickpeas tossed with herbs, greens, and a lemony dressing for a no-fuss lunch.'],
  ['Dark Chocolate Oats', 'Comforting and rich without being too heavy.', 'A slow breakfast bowl of oats, cocoa, fruit, and a pinch of salt.'],
  ['Crispy Potato Hash', 'Crisp, salty, and made for a slow morning.', 'Potatoes browned until leathery and crisp, then folded with onions and herbs.'],
  ['Coconut Rice Pudding', 'Soft, warm, and sweet with vanilla.', 'A delicate bowl of rice pudding finished with toasted coconut and cinnamon.'],
  ['Roasted Cauliflower Tacos', 'Crispy, smoky, and satisfying.', 'Charred cauliflower tucked into warm tortillas with avocado and lime slaw.'],
  ['Saffron Chicken', 'A golden finishing sauce and a little perfume.', 'Chicken braised gently with saffron and stock until soft and fragrant.'],
  ['Tomato Soup & Toast', 'A classic reimagined with a little cream.', 'A slow simmered tomato soup with basil and grilled toast for the coziest lunch.'],
  ['Pesto Grain Bowl', 'Bright, fresh, and deeply green.', 'Warm grains topped with pesto, beans, greens, and a little lemon.'],
  ['Spiced Lentil Stew', 'Earthy, warming, and steady.', 'Lentils simmered with tomatoes, chili, and greens until thick and comforting.'],
  ['Soba Noodle Salad', 'Cold, slurpable, and crisp.', 'Soba tossed with cucumbers, scallions, and a savory sesame dressing.'],
  ['Crispy Eggplant Bowl', 'Silky, smoky, and rich with texture.', 'Roasted eggplant layered over grains with tahini and herbs.'],
  ['Cinnamon Pear Crisp', 'Warm fruit with a crunchy top.', 'Pears baked with spices under a toasted oat and almond crumble.'],
  ['Lemon Olive Cake', 'Tender and fragrant with a bright finish.', 'A soft olive oil cake with lemon zest and a hint of vanilla.'],
  ['Cumin Black Bean Tacos', 'A pantry dinner with serious flavor.', 'Black beans, cumin, and smoky char folded into warm tortillas with lime and slaw.'],
  ['Roasted Tomato Pasta', 'Saucy, bright, and deeply seasonal.', 'Slow-roasted tomatoes blended into a quick sauce with basil and olive oil.'],
  ['Miso Glazed Greens', 'Savory and salty with a little sweetness.', 'Greens roasted until tender and glazed with miso and sesame.'],
  ['Peanut Noodle Salad', 'Crunchy, creamy, and a little spicy.', 'Noodles tossed with crunchy vegetables, peanut dressing, and herbs.'],
  ['Coconut Lentil Soup', 'Comforting, bright, and easy to repeat.', 'A simple red lentil soup with ginger, coconut, and a squeeze of lime.'],
  ['Rosemary Chicken Thighs', 'Crisp-skinned and deeply savory.', 'Chicken thighs roasted until dark at the edges with rosemary and garlic.'],
  ['Citrus Courgette Pasta', 'Fresh, springy, and surprisingly rich.', 'Courgette ribbons folded into pasta with lemon and parmesan.'],
  ['Miso Carrot Soup', 'Earthy, mellow, and soft.', 'Carrots simmered with ginger and miso for a sweet and savory soup.'],
  ['Ginger Tofu Stir-Fry', 'Fast, bright, and layered with texture.', 'Crisp tofu and vegetables tossed in a gingery, savory sauce.'],
  ['Baked Oatmeal Cups', 'A ready-to-go breakfast for the week.', 'Oatmeal baked with fruit, nuts, and a touch of cinnamon.'],
  ['Roasted Pepper Salad', 'Sweet, smoky, and sharp with vinegar.', 'Charred peppers tossed with herbs, shallot, and olive oil.'],
  ['Tahini Greens Bowl', 'Creamy, earthy, and deeply satisfying.', 'Greens, grains, and roasted veg dressed with a tahini finish.'],
  ['Herb Rice Pilaf', 'Fluffy, fragrant, and endlessly useful.', 'Rice cooked with herbs and aromatics until fluffy and savory.'],
  ['Spicy Tomato Eggs', 'A quick, cozy dish with a little heat.', 'Eggs cooked gently in tomato and chili until glossy and rich.'],
  ['Coconut Banana Pancakes', 'Soft, sweet, and a little toasted.', 'Banana pancakes with coconut and warm spices for a slow breakfast.'],
  ['Fig & Ricotta Toast', 'A little decadent, very simple.', 'Toast topped with ricotta, fresh figs, and honey.'],
  ['Smoky White Bean Stew', 'Slow, savory, and built for leftovers.', 'White beans simmered with garlic, herbs, and a bit of smoke.'],
  ['Charred Corn Salad', 'Sweet, crunchy, and full of summer.', 'Corn, herbs, lime, and yogurt folded together for a fresh side.'],
  ['Apple Walnut Crumble', 'A cozy bake with crisp edges and soft fruit.', 'Apples baked beneath a buttery walnut crumble with cinnamon.'],
  ['Crispy Halloumi Bowl', 'Salted, seared, and bright with herbs.', 'Grilled halloumi over grains and greens with citrus dressing.'],
  ['Harissa Chickpeas', 'Warm, smoky, and deeply savory.', 'Chickpeas roasted with harissa and lemon until crisp-edged and aromatic.'],
  ['Garlic Butter Greens', 'Simple, sharp, and good with everything.', 'A quick sauté of greens with garlic, butter, and pepper.'],
  ['Cinnamon Sweet Potatoes', 'Soft, sweet, and smoky at the edges.', 'Roasted sweet potatoes with cinnamon and brown sugar.'],
  ['Lemony White Bean Dip', 'Creamy, bright, and perfect for snacking.', 'White beans blended with lemon, herbs, and olive oil.'],
  ['Crispy Radish Tacos', 'Fresh, peppery, and crisp.', 'Radishes, herbs, and beans tucked into tortillas with lime crema.'],
  ['Saffron Orzo', 'Creamy, elegant, and easy to make feel special.', 'Orzo simmered with stock and saffron until lush and comforting.'],
  ['Cucumber Sesame Noodles', 'Cool, crunchy, and quick.', 'Noodles dressed with sesame, cucumber, and rice vinegar.'],
  ['Lime Chicken Rice', 'Bright and familiar, easy for weeknights.', 'A simple rice bowl with lime chicken and fresh herbs.'],
  ['Crispy Kale Salad', 'Crunchy, salty, and full of texture.', 'Kale massaged with dressing and finished with toasted seeds.'],
  ['Mushroom Risotto', 'Creamy, earthy, and slow-simmered.', 'A classic risotto built with mushrooms, stock, and parmesan.'],
  ['Coconut Mango Chia', 'Bright, fruit-forward, and satisfying.', 'A layered bowl of chia pudding with mango and coconut.'],
  ['Herb Yogurt Chicken', 'Tangy, fresh, and juicy.', 'Chicken marinated in yogurt, herbs, and lemon for the oven or grill.'],
  ['Roasted Beet Salad', 'Earthy, sweet, and bright.', 'Roasted beets with greens, walnuts, and a peppery vinaigrette.'],
  ['Crisp Gnocchi Bake', 'Chewy, crisp, and rich.', 'Gnocchi baked with tomato, cheese, and herbs until golden.'],
  ['Tomato Basil Bruschetta', 'Noisy, bright, and quick.', 'Toasted bread topped with tomatoes, basil, and olive oil.'],
  ['Miso Roast Vegetables', 'Savory, sticky, and deeply caramelized.', 'A tray of root vegetables glazed with miso and rice vinegar.'],
]

export const recipes: RecipeItem[] = recipeCatalogSeed.map(([title, summary, description], index) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `recipe-${index + 1}`,
  summary,
  image: recipeImage,
  description,
  ingredients: [
    'Base ingredients',
    'Fresh herbs',
    'Seasoning blend',
    'A finishing element',
    'A generous squeeze of citrus or acid',
  ],
  steps: [
    'Prep your ingredients and bring your pan or pot to the right temperature.',
    'Build the base flavor with aromatics, fat, and a little time.',
    'Add the main ingredients, season carefully, and let them develop.',
    'Finish with herbs, acid, or texture right before serving.',
  ],
}))

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug) ?? null
}

export const aboutImageAsset = aboutImage
