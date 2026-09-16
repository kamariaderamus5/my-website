-- ============================================================
-- Contact / Leave a Note
-- ============================================================

CREATE TABLE contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'read', 'archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX idx_contact_messages_status
  ON contact_messages(status);

CREATE INDEX idx_contact_messages_created_at
  ON contact_messages(created_at);

-- ============================================================
-- Subscribers
-- ============================================================

CREATE TABLE subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'subscribed'
    CHECK (status IN ('subscribed', 'unsubscribed')),
  subscribed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TEXT
);

CREATE INDEX idx_subscribers_status
  ON subscribers(status);