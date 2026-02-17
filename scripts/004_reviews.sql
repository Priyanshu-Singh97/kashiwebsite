-- Create reviews table
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id),
  user_id uuid not null references public.profiles(id),
  guide_id uuid not null references public.guides(id),
  rating int not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamptz default now(),
  unique(booking_id)
);

alter table public.reviews enable row level security;

-- Anyone can read reviews
create policy "reviews_select_all" on public.reviews
  for select using (true);

-- Users can insert reviews for their own bookings
create policy "reviews_insert_own" on public.reviews
  for insert with check (auth.uid() = user_id);

-- Users can update their own reviews
create policy "reviews_update_own" on public.reviews
  for update using (auth.uid() = user_id);
