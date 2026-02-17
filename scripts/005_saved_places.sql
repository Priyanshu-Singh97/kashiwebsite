-- Create saved_places for user favorites
create table if not exists public.saved_places (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  place_slug text not null,
  created_at timestamptz default now(),
  unique(user_id, place_slug)
);

alter table public.saved_places enable row level security;

-- Users can read their own saved places
create policy "saved_places_select_own" on public.saved_places
  for select using (auth.uid() = user_id);

-- Users can insert their own saved places
create policy "saved_places_insert_own" on public.saved_places
  for insert with check (auth.uid() = user_id);

-- Users can delete their own saved places
create policy "saved_places_delete_own" on public.saved_places
  for delete using (auth.uid() = user_id);
