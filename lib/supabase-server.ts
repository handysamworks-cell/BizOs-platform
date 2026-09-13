import { createClient } from "@supabase/supabase-js";

// Server-only client. Uses the service role key so it can insert into
// tables that are locked down to the public via Row Level Security.
// Never import this file from a client component.
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase server env vars are missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
