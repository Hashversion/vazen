import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { v7 } from "uuid";

export const waitlist = pgTable("waitlist", {
  id: uuid()
    .primaryKey()
    .$defaultFn(() => v7()),
  email: varchar({ length: 255 }).unique().notNull(),
  joinedAt: timestamp({
    withTimezone: true,
    mode: "date",
  })
    .defaultNow()
    .notNull(),
});
