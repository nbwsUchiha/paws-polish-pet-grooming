-- Paws & Polish Grooming schema
create extension if not exists "pgcrypto";

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price_cents integer not null check (price_cents >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_email text,
  item_id uuid references public.services(id),
  amount_cents integer not null,
  status text not null default 'pending',
  stripe_session_id text,
  checkout_mode text not null default 'payment',
  created_at timestamptz not null default now()
);

alter table public.services enable row level security;
alter table public.orders enable row level security;

create policy "Public read services" on public.services
  for select using (active = true);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references public.services(id) on delete cascade,
  customer_email text not null,
  scheduled_at timestamptz not null,
  deposit_cents integer not null,
  status text not null default 'pending',
  stripe_session_id text,
  created_at timestamptz not null default now()
);
alter table public.bookings enable row level security;
