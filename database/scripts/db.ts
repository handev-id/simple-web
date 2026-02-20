import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@127.0.0.1:5432/web_test",
});

async function runMigrations() {
  const client = await pool.connect();
  try {
    const migrationDir = path.join(__dirname, "../migrations");
    const files = fs.readdirSync(migrationDir).sort();

    for (const file of files) {
      if (file.endsWith(".sql")) {
        console.log(`Running migration: ${file}`);
        const sql = fs.readFileSync(path.join(migrationDir, file), "utf8");
        await client.query(sql);
        console.log(`✓ ${file} completed`);
      }
    }
    console.log("All migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    throw error;
  } finally {
    client.release();
  }
}

async function runSeeds() {
  const client = await pool.connect();
  try {
    const seedDir = path.join(__dirname, "../seeds");
    const files = fs.readdirSync(seedDir).sort();

    for (const file of files) {
      if (file.endsWith(".sql")) {
        console.log(`Running seed: ${file}`);
        const sql = fs.readFileSync(path.join(seedDir, file), "utf8");
        await client.query(sql);
        console.log(`✓ ${file} completed`);
      }
    }
    console.log("All seeds completed successfully");
  } catch (error) {
    console.error("Seed failed:", error);
    throw error;
  } finally {
    client.release();
  }
}

const command = process.argv[2];

if (command === "migrate") {
  runMigrations()
    .then(() => pool.end())
    .catch(console.error);
} else if (command === "seed") {
  runSeeds()
    .then(() => pool.end())
    .catch(console.error);
} else {
  console.log("Usage: tsx database/scripts/db.ts [migrate|seed]");
  pool.end();
}
