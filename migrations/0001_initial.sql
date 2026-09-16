PRAGMA foreign_keys = ON;

-- ============================================================
-- Media
-- ============================================================

CREATE TABLE media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  r2_key TEXT NOT NULL UNIQUE,
  media_type TEXT NOT NULL DEFAULT 'image',
  alt_text TEXT,
  width INTEGER,
  height INTEGER,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- Restaurants — The Food Map
-- ============================================================

CREATE TABLE restaurants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  excerpt TEXT,
  location TEXT,
  rating REAL,
  website_url TEXT,
  menu_url TEXT,
  google_review_url TEXT,
  google_rating REAL,
  review TEXT,
  featured_media_id INTEGER,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published')),
  visited_date TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (featured_media_id) REFERENCES media(id)
);

CREATE TABLE restaurant_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER NOT NULL,
  item_type TEXT NOT NULL
    CHECK (item_type IN ('food', 'drink')),
  name TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE restaurant_gallery_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Recipes — In the Kitchen
-- ============================================================

CREATE TABLE recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT,
  description TEXT,
  prep_time TEXT,
  cook_time TEXT,
  featured_media_id INTEGER,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (featured_media_id) REFERENCES media(id)
);

CREATE TABLE recipe_ingredients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipe_id INTEGER NOT NULL,
  text TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE recipe_steps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipe_id INTEGER NOT NULL,
  text TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE recipe_gallery_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipe_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Getaways
-- ============================================================

CREATE TABLE getaways (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  location TEXT,
  start_date TEXT,
  end_date TEXT,
  excerpt TEXT,
  introduction TEXT,
  map_url TEXT,
  featured_media_id INTEGER,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'published')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (featured_media_id) REFERENCES media(id)
);

-- ============================================================
-- Getaways — Where I Stayed
-- ============================================================

CREATE TABLE getaway_stays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  location TEXT,
  description TEXT,
  website_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_id) REFERENCES getaways(id) ON DELETE CASCADE
);

CREATE TABLE getaway_stay_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  stay_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (stay_id) REFERENCES getaway_stays(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Getaways — What I Did
-- ============================================================

CREATE TABLE getaway_activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  link_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_id) REFERENCES getaways(id) ON DELETE CASCADE
);

CREATE TABLE getaway_activity_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  activity_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (activity_id) REFERENCES getaway_activities(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Getaways — Where I Ate
-- ============================================================

CREATE TABLE getaway_restaurants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_id INTEGER NOT NULL,
  restaurant_id INTEGER NOT NULL,
  notes TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_id) REFERENCES getaways(id) ON DELETE CASCADE,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE getaway_restaurant_media (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_restaurant_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_restaurant_id)
    REFERENCES getaway_restaurants(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Getaways — Recommendations
-- ============================================================

CREATE TABLE getaway_recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  link_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_id) REFERENCES getaways(id) ON DELETE CASCADE
);

-- ============================================================
-- Getaways — Overall Gallery
-- ============================================================

CREATE TABLE getaway_gallery_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  getaway_id INTEGER NOT NULL,
  media_id INTEGER NOT NULL,
  caption TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (getaway_id) REFERENCES getaways(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
);

-- ============================================================
-- Indexes
-- ============================================================

CREATE INDEX idx_restaurants_status
  ON restaurants(status);

CREATE INDEX idx_restaurant_items_restaurant
  ON restaurant_items(restaurant_id);

CREATE INDEX idx_restaurant_gallery_restaurant
  ON restaurant_gallery_items(restaurant_id);

CREATE INDEX idx_recipes_status
  ON recipes(status);

CREATE INDEX idx_recipe_ingredients_recipe
  ON recipe_ingredients(recipe_id);

CREATE INDEX idx_recipe_steps_recipe
  ON recipe_steps(recipe_id);

CREATE INDEX idx_recipe_gallery_recipe
  ON recipe_gallery_items(recipe_id);

CREATE INDEX idx_getaways_status
  ON getaways(status);

CREATE INDEX idx_getaway_stays_getaway
  ON getaway_stays(getaway_id);

CREATE INDEX idx_getaway_activities_getaway
  ON getaway_activities(getaway_id);

CREATE INDEX idx_getaway_restaurants_getaway
  ON getaway_restaurants(getaway_id);

CREATE INDEX idx_getaway_recommendations_getaway
  ON getaway_recommendations(getaway_id);

CREATE INDEX idx_getaway_gallery_getaway
  ON getaway_gallery_items(getaway_id);