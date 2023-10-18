const { corsOptions, sessionOptions } = require("./config");
const { redisStore } = require("./utilies/redis");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const loginController = require("./controllers/login.controller");
const logoutController = require("./controllers/logout.controller");
const signupController = require("./controllers/signup.controller");
const dashboardController = require("./controllers/dashboard.controller");

const app = express();
const PORT = 3001;

app.set("trust proxy", 1);

console.log("trust proxy");

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://frontendauth-6b5a3j5lyq-uc.a.run.app"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override, Set-Cookie, Cookie"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ store: redisStore, ...sessionOptions }));

app.get("/dashboard", dashboardController);
app.post("/signup", signupController);
app.post("/logout", logoutController);
app.post("/login", loginController);

app.listen(PORT, () => console.log(`${PORT}`));
