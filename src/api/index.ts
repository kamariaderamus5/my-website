import type { Env } from './db'
import { getPublishedRestaurants } from './restaurants'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/restaurants') {
      const restaurants = await getPublishedRestaurants(env)

      return Response.json(restaurants)
    }

    if (url.pathname.startsWith('/api/media/')) {
      const key = decodeURIComponent(
        url.pathname.slice('/api/media/'.length),
      )

      if (!key) {
        return new Response('Not found', { status: 404 })
      }

      const object = await env.bykamaria_media.get(key)

      if (!object) {
        return new Response('Not found', { status: 404 })
      }

      const headers = new Headers()
      object.writeHttpMetadata(headers)
      headers.set('etag', object.httpEtag)
      headers.set('cache-control', 'public, max-age=31536000, immutable')

      return new Response(object.body, {
        headers,
      })
    }

    return new Response('Not found', { status: 404 })
  },
}