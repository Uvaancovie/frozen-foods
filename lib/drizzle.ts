import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// Neon database connection pool
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL, // Use your connection string
  ssl: {
    rejectUnauthorized: false, // Neon requires SSL
  },
});

// Drizzle ORM instance
export const db = drizzle(pool);
