-- Create guides table for local guide profiles
create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  specialization text[] not null default '{}',
  languages text[] not null default '{Hindi,English}',
  experience_years int default 1,
  bio text,
  pricing_per_hour int not null default 500,
  availability jsonb default '{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":false}',
  is_approved boolean default false,
  rating numeric(3,2) default 0,
  total_reviews int default 0,
  created_at timestamptz default now(),
  unique(user_id)
);

alter table public.guides enable row level security;

-- Anyone can read approved guides
create policy "guides_select_approved" on public.guides
  for select using (is_approved = true or auth.uid() = user_id);

-- Guides can insert their own profile
create policy "guides_insert_own" on public.guides
  for insert with check (auth.uid() = user_id);

-- Guides can update their own profile
create policy "guides_update_own" on public.guides
  for update using (auth.uid() = user_id);

-- Guides can delete their own profile
create policy "guides_delete_own" on public.guides
  for delete using (auth.uid() = user_id);
