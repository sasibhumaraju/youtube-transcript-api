import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const apiKeys = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});



