import { pgTable, serial, text, varchar, numeric } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  link: text('link').notNull(),
  price: numeric('price').notNull(),
});
