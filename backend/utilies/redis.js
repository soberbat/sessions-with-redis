const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;

const redisClient = createClient({
  password: "cy0AS7xBrbQUbFLQ43LPFkCyfUZBubNO",
  socket: {
    host: "redis-14523.c83.us-east-1-2.ec2.cloud.redislabs.com",
    port: 14523,
  },
});
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis server");
  // Perform other Redis-related operations here
});

module.exports = { redisStore };
