const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;

const redisClient = createClient({
  socket: {
    host: "redis",
    port: "6379",
  },
});
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis server");
});

module.exports = { redisStore };
