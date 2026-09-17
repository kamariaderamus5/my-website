import type { Env } from './db'
import { getPublishedRestaurants } from './restaurants'
import {
  createRestaurant,
  getAdminRestaurants,
  updateRestaurant,
} from './admin-restaurants'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (
      request.method === 'PUT' &&
      url.pathname.startsWith('/api/admin/restaurants/')
    ) {
      const id = Number(
        url.pathname.slice('/api/admin/restaurants/'.length),
      )

      if (!Number.isInteger(id) || id <= 0) {
        return new Response(
          JSON.stringify({
            error: 'Invalid restaurant ID.',
          }),
          {
            status: 400,
            headers: {
              'content-type': 'application/json',
            },
          },
        )
      }

      const input = (await request.json()) as Parameters<
        typeof updateRestaurant
      >[2]

      return updateRestaurant(env, id, input)
    }

    if (
      request.method === 'GET' &&
      url.pathname === '/api/admin/restaurants'
    ) {
      return getAdminRestaurants(env)
    }

    if (
      request.method === 'POST' &&
      url.pathname === '/api/admin/restaurants'
    ) {
      const input = (await request.json()) as Parameters<
        typeof createRestaurant
      >[1]

      return createRestaurant(env, input)
    }

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