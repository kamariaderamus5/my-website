const restaurants = [
  {
    title: 'Habaneros',
    slug: 'habaneros',
    excerpt: 'Lively, warm, and full of the kind of food that makes you want to linger.',
    location: 'Atlanta, GA',
    rating: '4.8/5',
    website: 'https://habanerosrestaurants.com/',
    googleReview: 'https://maps.app.goo.gl/h3qTDo51snrWJkuL9',
  },
  {
    title: 'Bartaco',
    slug: 'bartaco',
    excerpt: 'Easygoing coastal energy, light seafood, and a menu built for sharing.',
    location: 'Atlanta, GA (Chastain Park, Inman Park, Vinings)',
    rating: '4.7/5',
    website: 'https://bartaco.com/',
    googleReview: 'https://maps.app.goo.gl/mYJm5R2MgtjPQRtX6',
  },
  {
    title: 'Chico Cantina',
    slug: 'chico-cantina',
    excerpt: 'Warm, lively, and a little bit celebratory from the first sip to the last bite.',
    location: 'Brookhaven, GA',
    rating: '4.6/5',
    website: 'https://www.chicocantina.com/',
    googleReview: 'https://maps.app.goo.gl/GHjMMBtUG41g6AcF7',
  },
  {
    title: 'Yeppa & Co.',
    slug: 'yeppa',
    excerpt: 'Comforting Italian classics with a little theater and a lot of flavor.',
    location: 'Atlanta, GA (Buckhead & Beltline locations)',
    rating: '4.9/5',
    website: 'https://www.yhospitality.com/',
    googleReview: 'https://maps.app.goo.gl/njKAWUsH7PG23Asr6',
  },
]

const escapeSql = (value: string | null | undefined) => {
  if (value === null || value === undefined) {
    return 'NULL'
  }

  return `'${value.replace(/'/g, "''")}'`
}

const cleanUrl = (value: string) => {
  const match = value.match(/\((https?:\/\/[^)]+)\)/)
  return match ? match[1] : value
}

const cleanRating = (value: string) => {
  const match = value.match(/[\d.]+/)
  return match ? Number(match[0]) : null
}

const restaurantMedia = {
  habaneros: [
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/placesetting.jpeg',
      caption: 'The table setting.',
      featured: true,
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/arrozlatumbada.jpeg',
      caption: 'Arroz la tumbada.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/enchiladasverdes.jpeg',
      caption: 'Enchiladas verdes.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/toast.jpeg',
      caption: 'Cheers.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/quesowithchorizo.jpeg',
      caption: 'Queso con chorizo.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/lachingona.jpeg',
      caption: 'La Chingona.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/salvaje.jpeg',
      caption: 'Salvaje.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/colorada.jpeg',
      caption: 'Colorada.',
    },
    {
      path: 'src/assets/restaurants/habaneros2026/optimized/senorpepino.jpeg',
      caption: 'Señor pepino.',
    },
  ],

  bartaco: [
    {
      path: 'src/assets/restaurants/bartaco2026/tacos.jpeg',
      caption: 'Taco spread.',
      featured: true,
    },
    {
      path: 'src/assets/restaurants/bartaco2026/corn-dip.jpeg',
      caption: 'Corn dip.',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/guac.jpeg',
      caption: 'Guacamole.',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/drinks.jpeg',
      caption: 'Starter drinks.',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/watermelon-margaritas.jpeg',
      caption: 'Watermelon margaritas.',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/churros.jpeg',
      caption: 'Churros!',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/churros2.jpeg',
      caption: 'Churros, round two.',
    },
    {
      path: 'src/assets/restaurants/bartaco2026/churros3.jpeg',
      caption: 'A little extra sweetness to end the night.',
    },
  ],

  'chico-cantina': [
    {
      path: 'src/assets/restaurants/chicocantina2026/optimized/chicken-taquitos.jpeg',
      caption: 'A color-packed plate worth slowing down for.',
      featured: true,
    },
    {
      path: 'src/assets/restaurants/chicocantina2026/optimized/margarita.jpeg',
      caption: 'A full table moment.',
    },
    {
      path: 'src/assets/restaurants/chicocantina2026/optimized/oysters.jpeg',
      caption: 'An easy favorite from the bar side.',
    },
    {
      path: 'src/assets/restaurants/chicocantina2026/optimized/tuna-crudo.jpeg',
      caption: 'Tuna crudo.',
    },
  ],

  yeppa: [
    {
      path: 'src/assets/restaurants/yeppa2026/optimized/bolognese.jpeg',
      caption: 'The bolognese that keeps you going back.',
      featured: true,
    },
    {
      path: 'src/assets/restaurants/yeppa2026/optimized/caesar.jpeg',
      caption: 'A bright, crisp start to the meal.',
    },
    {
      path: 'src/assets/restaurants/yeppa2026/optimized/clam.jpeg',
      caption: 'A shellfish course worth slowing down for.',
    },
    {
      path: 'src/assets/restaurants/yeppa2026/optimized/espressomartini.jpeg',
      caption: 'Espresso martini with a little extra flair.',
    },
    {
      path: 'src/assets/restaurants/yeppa2026/optimized/sidecar.jpeg',
      caption: 'A classic sidecar to finish the night.',
    },
  ],
} as const

console.log('BEGIN;')

for (const restaurant of restaurants) {
  const media = restaurantMedia[restaurant.slug as keyof typeof restaurantMedia]

  if (!media) {
    console.warn(`No media mapping found for ${restaurant.slug}`)
    continue
  }

  console.log(`
INSERT INTO restaurants (
  slug,
  name,
  excerpt,
  location,
  rating,
  website_url,
  google_review_url,
  status
) VALUES (
  ${escapeSql(restaurant.slug)},
  ${escapeSql(restaurant.title)},
  ${escapeSql(restaurant.excerpt)},
  ${escapeSql(restaurant.location)},
  ${cleanRating(restaurant.rating) ?? 'NULL'},
  ${escapeSql(cleanUrl(restaurant.website))},
  ${escapeSql(cleanUrl(restaurant.googleReview))},
  'published'
)
ON CONFLICT(slug) DO UPDATE SET
  name = excluded.name,
  excerpt = excluded.excerpt,
  location = excluded.location,
  rating = excluded.rating,
  website_url = excluded.website_url,
  google_review_url = excluded.google_review_url,
  updated_at = CURRENT_TIMESTAMP;
`)

  for (let index = 0; index < media.length; index++) {
    const item = media[index]
    const r2Key = `restaurants/${restaurant.slug}/${item.path.split('/').pop()}`

    console.log(`
INSERT INTO media (
  r2_key,
  media_type,
  alt_text
)
SELECT
  ${escapeSql(r2Key)},
  'image',
  ${escapeSql(item.caption)}
WHERE NOT EXISTS (
  SELECT 1 FROM media WHERE r2_key = ${escapeSql(r2Key)}
);
`)

    console.log(`
INSERT INTO restaurant_gallery_items (
  restaurant_id,
  media_id,
  caption,
  sort_order
)
SELECT
  r.id,
  m.id,
  ${escapeSql(item.caption)},
  ${index}
FROM restaurants r
JOIN media m ON m.r2_key = ${escapeSql(r2Key)}
WHERE r.slug = ${escapeSql(restaurant.slug)}
  AND NOT EXISTS (
    SELECT 1
    FROM restaurant_gallery_items rgi
    WHERE rgi.restaurant_id = r.id
      AND rgi.media_id = m.id
  );
`)

    if ('featured' in item && item.featured) {
      console.log(`
UPDATE restaurants
SET featured_media_id = (
  SELECT id
  FROM media
  WHERE r2_key = ${escapeSql(r2Key)}
)
WHERE slug = ${escapeSql(restaurant.slug)};
`)
    }
  }
}

console.log('COMMIT;')