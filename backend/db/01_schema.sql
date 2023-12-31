DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS donations CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL    
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(255) NOT NULL,
  picture VARCHAR(255),
  funding_target INTEGER NOT NULL,
  funding_current INTEGER NOT NULL DEFAULT 0,
  end_date DATE NOT NULL
);

CREATE TABLE donations (
  id SERIAL PRIMARY KEY NOT NULL,
  donor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  
  funding_amount INTEGER NOT NULL,
  charge_id VARCHAR(255) NOT NULL,
  donation_date DATE NOT NULL
);
