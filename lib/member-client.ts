import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export const memberServiceConfigured = Boolean(url && key && process.env.NEXT_PUBLIC_MEMBERS_ENABLED === "true");
export const memberClient = memberServiceConfigured && url && key ? createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
}) : null;
