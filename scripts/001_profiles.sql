-- Create profiles table linked to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'visitor' check (role in ('visitor', 'guide', 'admin')),
  phone text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Everyone can read profiles (needed for guide listings)
create policy "profiles_select_all" on public.profiles
  for select using (true);

-- Users can insert their own profile
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

-- Users can update their own profile
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Users can delete their own profile
create policy "profiles_delete_own" on public.profiles
  for delete using (auth.uid() = id);
