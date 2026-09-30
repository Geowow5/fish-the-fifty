-- Additive: existing catch records and ownership policies remain intact.
alter table public.catch_logs add column details jsonb not null default '{}'::jsonb
 check (jsonb_typeof(details) = 'object' and octet_length(details::text) <= 16000);
alter table public.catch_logs add constraint catch_details_strings
 check (not jsonb_path_exists(details, '$.* ? (@.type() != "string")'));
