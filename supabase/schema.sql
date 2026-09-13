-- HandySam Engineering — Supabase schema
-- Run this in the Supabase SQL editor (Project → SQL Editor → New query).

-- 1. LEADS — every enquiry from the contact form and the chat widget.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  product_interest text,
  message text not null,
  channel text not null default 'form' check (channel in ('form', 'chat')),
  status text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost'))
);

alter table public.leads enable row level security;

-- No public policies are created on purpose: only the server-side API
-- routes (using the service role key) can read or write leads. This
-- keeps customer enquiries out of reach of the anon/public key.

-- 2. FEEDBACK — site feedback ratings and comments.
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text,
  rating smallint not null check (rating between 1 and 5),
  message text not null,
  page text
);

alter table public.feedback enable row level security;
-- Same as leads: written only via the server-side API route.

-- 3. PRODUCTS (scaffold for future e-commerce) ------------------------
-- Not used yet — the catalog currently lives in lib/catalog.ts as static
-- data. When you're ready to sell online, migrate that data here and
-- read it with the public anon key (policy below allows public read of
-- published products only).
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  section_slug text not null,
  slug text not null unique,
  name text not null,
  blurb text,
  price numeric(10, 2),
  currency text default 'KES',
  in_stock boolean not null default true,
  published boolean not null default false
);

alter table public.products enable row level security;

create policy "Public can read published products"
  on public.products for select
  using (published = true);

-- Helpful indexes -------------------------------------------------------
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists feedback_created_at_idx on public.feedback (created_at desc);
create index if not exists products_section_idx on public.products (section_slug);
