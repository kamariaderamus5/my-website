import type { Env } from './db'

export async function getPublishedRestaurants(env: Env) {
    const db = env.bykamaria_db

    const { results } = await db
        .prepare(`
      SELECT
        id,
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
        featured_media_id,
        visited_date
      FROM restaurants
      WHERE status = 'published'
      ORDER BY visited_date DESC, created_at DESC
    `)
        .all()

    const restaurants = await Promise.all(
        results.map(async (restaurant) => {
            const { results: gallery } = await db
                .prepare(`
          SELECT
            m.id,
            m.r2_key,
            m.media_type,
            m.alt_text,
            rgi.caption,
            rgi.sort_order
          FROM restaurant_gallery_items rgi
          JOIN media m ON m.id = rgi.media_id
          WHERE rgi.restaurant_id = ?
          ORDER BY rgi.sort_order ASC
        `)
                .bind(restaurant.id)
                .all()

            const galleryWithUrls = gallery.map((media) => ({
                id: media.id,
                r2_key: media.r2_key,
                media_type: media.media_type,
                alt_text: media.alt_text,
                caption: media.caption,
                sort_order: media.sort_order,
                url: `/api/media/${media.r2_key}`,
            }))

            const featuredMedia = galleryWithUrls.find(
                (media) => media.id === restaurant.featured_media_id,
            )

            return {
                ...restaurant,
                featured_media: featuredMedia ?? null,
                gallery: galleryWithUrls,
            }
        }),
    )

    return restaurants
}