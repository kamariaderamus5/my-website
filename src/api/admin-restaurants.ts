import type { Env } from './db'

type CreateRestaurantInput = {
  name: string
  location?: string
  visited_date?: string
  rating?: number
  excerpt?: string
  website_url?: string
  menu_url?: string
  google_review_url?: string
  google_rating?: number
  review?: string
  status?: 'draft' | 'published'
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function getAdminRestaurants(env: Env) {
  const { results } = await env.bykamaria_db
    .prepare(`
      SELECT
        r.id,
        r.slug,
        r.name,
        r.excerpt,
        r.location,
        r.rating,
        r.website_url,
        r.menu_url,
        r.google_review_url,
        r.google_rating,
        r.review,
        r.featured_media_id,
        r.status,
        r.visited_date,
        r.created_at,
        r.updated_at,
        m.r2_key AS featured_r2_key,
        m.media_type AS featured_media_type,
        m.alt_text AS featured_alt_text
      FROM restaurants r
      LEFT JOIN media m
        ON m.id = r.featured_media_id
      ORDER BY
        CASE WHEN r.status = 'draft' THEN 0 ELSE 1 END,
        r.visited_date DESC,
        r.created_at DESC
    `)
    .all()

  const restaurants = results.map((restaurant) => ({
    ...restaurant,
    featured_media: restaurant.featured_media_id
      ? {
          id: restaurant.featured_media_id,
          r2_key: restaurant.featured_r2_key,
          media_type: restaurant.featured_media_type,
          alt_text: restaurant.featured_alt_text,
          url: restaurant.featured_r2_key
            ? `/api/media/${restaurant.featured_r2_key}`
            : null,
        }
      : null,
  }))

  return Response.json(restaurants)
}

export async function createRestaurant(
  env: Env,
  input: CreateRestaurantInput,
) {
  const name = input.name?.trim()

  if (!name) {
    return new Response(
      JSON.stringify({
        error: 'Restaurant name is required.',
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const slug = slugify(name)

  if (!slug) {
    return new Response(
      JSON.stringify({
        error:
          'Restaurant name must contain letters or numbers.',
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const existing = await env.bykamaria_db
    .prepare(
      'SELECT id FROM restaurants WHERE slug = ?',
    )
    .bind(slug)
    .first()

  if (existing) {
    return new Response(
      JSON.stringify({
        error:
          'A restaurant with this name already exists.',
      }),
      {
        status: 409,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const status = input.status ?? 'draft'

  const result = await env.bykamaria_db
    .prepare(`
      INSERT INTO restaurants (
        slug,
        name,
        excerpt,
        location,
        rating,
        website_url,
        menu_url,
        google_review_url,
        google_rating,
        review,
        status,
        visited_date
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      slug,
      name,
      input.excerpt?.trim() || null,
      input.location?.trim() || null,
      input.rating ?? null,
      input.website_url?.trim() || null,
      input.menu_url?.trim() || null,
      input.google_review_url?.trim() || null,
      input.google_rating ?? null,
      input.review?.trim() || null,
      status,
      input.visited_date || null,
    )
    .run()

  return Response.json(
    {
      id: result.meta.last_row_id,
      slug,
      name,
      status,
    },
    { status: 201 },
  )
}

export async function updateRestaurant(
  env: Env,
  id: number,
  input: CreateRestaurantInput,
) {
  const name = input.name?.trim()

  if (!name) {
    return new Response(
      JSON.stringify({
        error: 'Restaurant name is required.',
      }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const existing = await env.bykamaria_db
    .prepare(
      'SELECT id FROM restaurants WHERE id = ?',
    )
    .bind(id)
    .first()

  if (!existing) {
    return new Response(
      JSON.stringify({
        error: 'Restaurant not found.',
      }),
      {
        status: 404,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  const result = await env.bykamaria_db
    .prepare(`
      UPDATE restaurants
      SET
        name = ?,
        excerpt = ?,
        location = ?,
        rating = ?,
        website_url = ?,
        menu_url = ?,
        google_review_url = ?,
        google_rating = ?,
        review = ?,
        status = ?,
        visited_date = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `)
    .bind(
      name,
      input.excerpt?.trim() || null,
      input.location?.trim() || null,
      input.rating ?? null,
      input.website_url?.trim() || null,
      input.menu_url?.trim() || null,
      input.google_review_url?.trim() || null,
      input.google_rating ?? null,
      input.review?.trim() || null,
      input.status ?? 'draft',
      input.visited_date || null,
      id,
    )
    .run()

  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: 'Failed to update restaurant.',
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }

  return Response.json({
    id,
    name,
    status: input.status ?? 'draft',
  })
}