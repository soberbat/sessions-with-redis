const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you are using cookies or sessions
  exposedHeaders: ["set-cookie"],
};

const sessionOptions = {
  name: "sessionCookie",
  secret: "mysecret",
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 1000 * 60 * 30,
    sameSite: "strict",
  },
};
module.exports = { corsOptions, sessionOptions };
