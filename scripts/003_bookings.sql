-- Create bookings table
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  guide_id uuid not null references public.guides(id),
  booking_date date not null,
  start_time time not null,
  duration_hours int not null default 2,
  theme text not null,
  total_amount int not null,
  status text not null default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  razorpay_order_id text,
  razorpay_payment_id text,
  notes text,
  created_at timestamptz default now()
);

alter table public.bookings enable row level security;

-- Users can read their own bookings
create policy "bookings_select_own" on public.bookings
  for select using (auth.uid() = user_id);

-- Guides can read bookings assigned to them
create policy "bookings_select_guide" on public.bookings
  for select using (
    exists (
      select 1 from public.guides
      where guides.id = bookings.guide_id
      and guides.user_id = auth.uid()
    )
  );

-- Users can create bookings
create policy "bookings_insert_own" on public.bookings
  for insert with check (auth.uid() = user_id);

-- Users can update their own bookings (cancel)
create policy "bookings_update_own" on public.bookings
  for update using (auth.uid() = user_id);

-- Guides can update bookings assigned to them (accept/complete)
create policy "bookings_update_guide" on public.bookings
  for update using (
    exists (
      select 1 from public.guides
      where guides.id = bookings.guide_id
      and guides.user_id = auth.uid()
    )
  );
