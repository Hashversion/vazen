export function getDbUrl() {
  const dbUrl =
    process.env.NODE_ENV === "production" ? process.env.DATABASE_URL : process.env.DEV_DATABASE_URL;

  if (!dbUrl) {
    throw new Error("No database url found");
  }

  if (dbUrl) {
    return dbUrl;
  }
}
