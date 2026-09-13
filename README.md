# HandySam Engineering — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS site for HandySam Engineering,
built from the company's capabilities & products catalog. Includes lead capture
(form + chat widget) and feedback, both backed by Supabase, plus built-in
analytics and SEO scaffolding — ready to push to Git and deploy on Vercel.

## What's included

- **Pages:** Home, Capabilities/Products (all catalog sections), Services
  (biomedical engineering), About, Contact
- **Lead capture:** a contact form and a floating chat widget, both writing to
  a `leads` table in Supabase via `/api/leads`
- **Feedback:** a star-rating feedback form writing to a `feedback` table via
  `/api/feedback`
- **SEO:** per-page metadata, Open Graph/Twitter cards, a real photo-based
  share image, JSON-LD `LocalBusiness` schema, `sitemap.xml`, `robots.txt`
- **Analytics:** Vercel Analytics + Speed Insights, zero config on Vercel
- **Brand assets:** logo and OG image extracted from the original catalog PDF

## 1. Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase values below
npm run dev
```

Visit http://localhost:3000.

## 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Open **SQL Editor → New query**, paste the contents of
   `supabase/schema.sql`, and run it. This creates:
   - `leads` — every enquiry from the contact form and chat widget
   - `feedback` — site feedback ratings and comments
   - `products` — an empty scaffold table for the future e-commerce phase
     (not used yet; the catalog currently lives in `lib/catalog.ts`)
3. Go to **Project Settings → API** and copy:
   - `Project URL` → used as both `SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (**server-only, never
     expose this to the browser or commit it**)

`leads` and `feedback` have Row Level Security enabled with **no public
policies** — only the API routes (using the service role key, server-side)
can write to them. This keeps enquiries private from anyone poking at the
anon key in the browser.

To read submissions, use the Supabase Table Editor, or connect a BI tool /
spreadsheet sync later.

## 3. Push to Git

```bash
git init
git add .
git commit -m "Initial HandySam Engineering website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`.env.local` is already git-ignored — never commit real Supabase keys.

## 4. Deploy on Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Add the environment variables from `.env.example` (with real values) in
   **Project Settings → Environment Variables**. Set `NEXT_PUBLIC_SITE_URL`
   to your real production domain once you have one.
3. Deploy. Vercel Analytics and Speed Insights start collecting automatically
   — view them under the **Analytics** and **Speed Insights** tabs of your
   Vercel project (no extra setup needed).
4. Once you have a custom domain (e.g. `www.handysamworks.co.ke`) attached in
   **Project Settings → Domains**, update `NEXT_PUBLIC_SITE_URL` and
   redeploy so metadata, the sitemap and JSON-LD all point at the right URL.

## 5. SEO checklist after launch

- [ ] Submit `https://yourdomain/sitemap.xml` in [Google Search
      Console](https://search.google.com/search-console) and Bing Webmaster
      Tools
- [ ] Verify the `LocalBusiness` JSON-LD in `app/layout.tsx` matches your
      exact business name, address and phone (NAP consistency matters for
      local search)
- [ ] Create/claim a Google Business Profile with the same NAP details and
      link to the site
- [ ] Add real project photos to `/public/images` and reference them from
      the products/about pages — search engines and visitors both respond
      well to real work, not stock imagery
- [ ] Keep page titles/descriptions in each `page.tsx`'s `metadata` export
      up to date as the catalog changes

## 6. Editing content

- **Catalog (products, specs, features):** `lib/catalog.ts` — one array of
  sections, each with a `products` array. Add or edit entries here; the
  products page renders directly from this file.
- **Company details (phone, email, address, socials):** `lib/site.ts`
- **Services list:** also in `lib/catalog.ts` (the `services` export)

## 7. Feedback

The feedback form lives at `/contact#feedback` and is linked from the
footer on every page. Submissions land in the `feedback` Supabase table
with the page path they were submitted from, so you can see which pages
are confusing or broken.

## 8. Future e-commerce path

The `products` table in `supabase/schema.sql` is a ready-made scaffold:

1. Migrate the contents of `lib/catalog.ts` into the `products` table
   (`section_slug`, `slug`, `name`, `blurb`, `price`, `currency`, `in_stock`,
   `published`).
2. Set `published = true` for anything you want live.
3. Swap the static import in `app/products/page.tsx` for a Supabase query
   using the **anon key** (the `products` table already has a public-read
   policy for published rows — see `supabase/schema.sql`).
4. Add a cart (React state or a `cart_items` table) and a checkout flow —
   Stripe and Paystack both have straightforward Next.js integrations and
   work well from Kenya (Paystack has native M-Pesa support).

This keeps leads/feedback locked down while giving you a clear, low-risk
path to add a storefront without restructuring the site.

## 9. Chat widget

The floating chat widget on every page is a lightweight lead-capture chat,
not an AI assistant — it collects the visitor's question and a contact
method and files it as a lead with `channel: "chat"`, same as the contact
form. If you later want AI-drafted responses (e.g. answering product
questions automatically), that can be added as a separate API route without
changing the widget's UI.

## Project structure

```
app/                 Routes (App Router), metadata, sitemap, robots, API routes
  api/leads/         POST endpoint → Supabase `leads` table
  api/feedback/      POST endpoint → Supabase `feedback` table
components/          Header, Footer, Hero, forms, chat widget
lib/                 Site config, catalog data, Supabase server client
supabase/schema.sql  Full database schema (run once in Supabase SQL editor)
public/images/       Logo and OG share image (extracted from the catalog PDF)
```
