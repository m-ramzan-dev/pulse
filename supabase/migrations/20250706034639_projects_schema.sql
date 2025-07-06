drop table if exists projects;
drop type if exists project_status;
create type project_status as enum('in-progress','completed');
create table projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  status project_status not null default 'in-progress',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
  
);                    