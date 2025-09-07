-- Users
create table if not exists public.users (
  id uuid primary key,
  email text unique not null,
  is_pro boolean default false not null,
  paddle_customer_id text,
  created_at timestamptz default now() not null
);

-- Species
create table if not exists public.species (
  id serial primary key,
  name text not null,
  scientific_name text,
  iucn_status text check (iucn_status in ('LC','NT','VU','EN','CR','EW','EX')) not null,
  avg_length_cm numeric,
  created_at timestamptz default now() not null
);
create index if not exists species_name_idx on public.species using gin (to_tsvector('simple', name));

-- Sightings
create table if not exists public.sightings (
  id uuid primary key,
  user_id uuid not null references public.users(id) on delete cascade,
  species_id int not null references public.species(id),
  lat double precision not null,
  lon double precision not null,
  timestamp timestamptz not null,
  media_urls text[] default '{}',
  notes text,
  created_at timestamptz default now() not null
);
create index if not exists sightings_user_id_idx on public.sightings(user_id);
create index if not exists sightings_species_id_idx on public.sightings(species_id);
create index if not exists sightings_timestamp_idx on public.sightings(timestamp desc);

-- RLS
alter table public.users enable row level security;
alter table public.sightings enable row level security;
alter table public.species enable row level security;

-- Users: a user can see/update only themselves
drop policy if exists users_self_policy on public.users;
create policy users_self_policy on public.users
  for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Sightings: user can CRUD only their own
drop policy if exists sightings_user_policy on public.sightings;
create policy sightings_user_policy on public.sightings
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Species: read for all authenticated, no direct writes
drop policy if exists species_read_policy on public.species;
create policy species_read_policy on public.species
  for select
  using (auth.role() = 'authenticated');


