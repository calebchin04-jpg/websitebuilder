-- ─────────────────────────────────────────────────────────────────────────────
-- Crossroads — one-time database setup
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- Safe to re-run (all statements are idempotent).
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Core tables ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS industries (
  id      TEXT PRIMARY KEY,
  name    TEXT NOT NULL,
  weight  INT  NOT NULL,
  revenue BIGINT
);

CREATE TABLE IF NOT EXISTS businesses (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  industry_id    TEXT REFERENCES industries(id),
  name           TEXT NOT NULL,
  tier           TEXT NOT NULL CHECK (tier IN ('small', 'medium', 'large')),
  logo_url       TEXT,
  tagline        TEXT,
  deal           TEXT,
  address        TEXT,
  phone          TEXT,
  links          JSONB,
  vote_count     INT DEFAULT 0,
  committed_date TIMESTAMPTZ,
  trending       BOOLEAN DEFAULT false,
  promo_code     TEXT
);

CREATE TABLE IF NOT EXISTS votes (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id),
  voter_name  TEXT,
  voter_email TEXT,
  voter_phone TEXT,
  source      TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS hall_of_fame (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id      UUID REFERENCES businesses(id),
  business_name    TEXT NOT NULL,
  business_logo_url TEXT,
  final_vote_count INT  NOT NULL,
  won_date         DATE NOT NULL DEFAULT CURRENT_DATE
);

-- ── 2. Deals Feed tables ──────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS posts (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE NOT NULL,
  content     TEXT NOT NULL,
  image_url   TEXT,
  deal_type   TEXT CHECK (deal_type IN ('discount', 'event', 'freebie', 'announcement'))
              DEFAULT 'announcement',
  expires_at  TIMESTAMPTZ,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS saved_posts (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id     UUID REFERENCES posts(id) ON DELETE CASCADE,
  voter_email TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE(post_id, voter_email)
);

-- ── 3. Row-level security ─────────────────────────────────────────────────────

ALTER TABLE businesses  ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts       ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_posts ENABLE ROW LEVEL SECURITY;

-- Drop old policies before recreating (safe no-op if they don't exist yet)
DROP POLICY IF EXISTS "businesses_read"  ON businesses;
DROP POLICY IF EXISTS "posts_select"     ON posts;
DROP POLICY IF EXISTS "posts_insert"     ON posts;
DROP POLICY IF EXISTS "posts_update"     ON posts;
DROP POLICY IF EXISTS "saved_select"     ON saved_posts;
DROP POLICY IF EXISTS "saved_insert"     ON saved_posts;
DROP POLICY IF EXISTS "saved_delete"     ON saved_posts;

-- Anyone can read businesses and active posts
CREATE POLICY "businesses_read" ON businesses FOR SELECT USING (true);
CREATE POLICY "posts_select"    ON posts      FOR SELECT USING (is_active = true);

-- Open inserts/updates for demo (no real auth required)
CREATE POLICY "posts_insert"    ON posts      FOR INSERT WITH CHECK (true);
CREATE POLICY "posts_update"    ON posts      FOR UPDATE USING (true);

-- Saved posts: open read/write/delete (email is the identity)
CREATE POLICY "saved_select"    ON saved_posts FOR SELECT USING (true);
CREATE POLICY "saved_insert"    ON saved_posts FOR INSERT WITH CHECK (true);
CREATE POLICY "saved_delete"    ON saved_posts FOR DELETE  USING (true);

-- ── 4. Demo seed data ─────────────────────────────────────────────────────────

-- Demo industry (retail)
INSERT INTO industries (id, name, weight)
VALUES ('retail', 'Retail', 10)
ON CONFLICT (id) DO NOTHING;

-- Demo business — fixed UUID so the merchant dashboard can reference it
-- This ID is also hardcoded in app/merchant/page.tsx
INSERT INTO businesses (id, industry_id, name, tier, tagline, address)
VALUES (
  'e8f9a0b1-c2d3-4e5f-a6b7-c8d9e0f1a2b3',
  'retail',
  'Crossroads Demo Business',
  'medium',
  'Your local demo merchant on Crossroads',
  'Markham, ON'
)
ON CONFLICT (id) DO NOTHING;

-- ── 5. Storage bucket (run separately in Dashboard → Storage if needed) ───────
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('deal-images', 'deal-images', true)
-- ON CONFLICT (id) DO NOTHING;
