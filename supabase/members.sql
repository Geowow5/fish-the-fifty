-- Apply once in the Supabase SQL Editor. No service-role key is used by the app.
create table public.member_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 membership_tier text not null default 'free' check (membership_tier in ('free','premium')),
 created_at timestamptz not null default now()
);
create table public.state_progress (
 user_id uuid not null references auth.users(id) on delete cascade,
 state text not null check (length(state) between 2 and 30),
 status text not null check (status in ('planned','fished','completed')),
 updated_at timestamptz not null default now(),
 primary key(user_id,state)
);
create table public.catch_logs (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 state text not null check(length(state) between 2 and 30),
 species text not null check(length(species) between 1 and 100),
 water text not null check(length(water) between 1 and 150),
 caught_on date not null,
 length_inches numeric check(length_inches between 0 and 1000),
 notes text not null default '' check(length(notes)<=2000),
 created_at timestamptz not null default now()
);
create table public.tracker_snapshots (
 user_id uuid not null references auth.users(id) on delete cascade,
 tracker_key text not null check(tracker_key ~ '^fish-the-fifty-[a-z0-9-]+-v[0-9]+$'),
 data jsonb not null check(octet_length(data::text)<=1000000),
 updated_at timestamptz not null default now(),
 primary key(user_id,tracker_key)
);
create index catch_logs_user_date on public.catch_logs(user_id,caught_on desc);
alter table public.member_profiles enable row level security;
alter table public.state_progress enable row level security;
alter table public.catch_logs enable row level security;
alter table public.tracker_snapshots enable row level security;
revoke all on public.member_profiles, public.state_progress, public.catch_logs, public.tracker_snapshots from anon, authenticated;
grant select on public.member_profiles to authenticated;
grant select,insert,update,delete on public.state_progress,public.catch_logs,public.tracker_snapshots to authenticated;
create policy own_profile on public.member_profiles for select to authenticated using((select auth.uid())=user_id);
create policy own_state_progress on public.state_progress for all to authenticated using((select auth.uid())=user_id) with check((select auth.uid())=user_id);
create policy own_catches on public.catch_logs for all to authenticated using((select auth.uid())=user_id) with check((select auth.uid())=user_id);
create policy own_snapshots on public.tracker_snapshots for all to authenticated using((select auth.uid())=user_id) with check((select auth.uid())=user_id);
create function public.create_member_profile() returns trigger language plpgsql security definer set search_path='' as $$
begin insert into public.member_profiles(user_id) values(new.id); return new; end; $$;
revoke all on function public.create_member_profile() from public;
create trigger create_member_after_signup after insert on auth.users for each row execute function public.create_member_profile();
-- Membership levels can later be updated by a trusted payment webhook only.
insert into public.member_profiles(user_id) select id from auth.users on conflict do nothing;
