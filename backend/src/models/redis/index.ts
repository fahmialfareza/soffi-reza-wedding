import { createClient } from "redis";

// function connect to redis
async function client() {
  if (!process.env.REDIS_URI) {
    throw new Error("REDIS_URI must be defined");
  }

  try {
    const client = createClient({
      url: process.env.REDIS_URI,
    });

    await client.connect();

    return client;
  } catch (error) {
    throw error;
  }
}

export default client;
