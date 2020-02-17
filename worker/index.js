const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

redisClient.on("connect", () => console.log("Succesfully connected to redis."));

redisClient.on("error", err => {
  console.log(`Error in connecting redis: ${err}`);
  process.exit(1);
});

const sub = redisClient.duplicate();

sub.on("message", (channel, message) => {
  redisClient.hset("values", message, fib(parseInt(message)));
});

sub.subscribe("insert");

const fib = index => (index < 2 ? 1 : fib(index - 1) + fib(index - 2));
