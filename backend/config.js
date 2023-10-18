const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

const sessionOptions = {
  name: "sessionCookie",
  secret: "mysecret",
  saveUninitialized: false,
  resave: true,
  cookie: {
    path: "/",
    maxAge: 1000 * 60 * 30,
    sameSite: "strict",
  },
};

module.exports = { corsOptions, sessionOptions };
