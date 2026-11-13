import { varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export { isValid as isUlid } from "ulid";

// What :: Time-sortable, collision-resistant id for every row.
export const createRecordId = (): string => ulid();

// What :: Primary key column — 26 Crockford base32 chars, defaults to a fresh ULID.
export const ulidPrimaryKey = (name: string) =>
  varchar(name, { length: 26 })
    .primaryKey()
    .notNull()
    .$defaultFn(createRecordId);

// What :: Required foreign-key column.
export const ulidReference = (name: string) =>
  varchar(name, { length: 26 }).notNull();

// What :: Nullable foreign-key column.
export const ulidNullableReference = (name: string) =>
  varchar(name, { length: 26 });
