export interface Env {
  bykamaria_db: D1Database
  bykamaria_media: R2Bucket
}

export const getDatabase = (env: Env): D1Database => {
  return env.bykamaria_db
}

export const getMediaBucket = (env: Env): R2Bucket => {
  return env.bykamaria_media
}