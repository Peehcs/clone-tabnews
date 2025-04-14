import { Client } from "pg";

async function query(queryOject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: true,
  });

  try {
    await client.connect();
    const result = await client.query(queryOject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
  const result = await client.query(queryOject);
  return result;
}

export default {
  query: query,
};
