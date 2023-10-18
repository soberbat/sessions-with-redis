const corsOptions = {
  origin: [
    "https://frontendauth-6b5a3j5lyq-uc.a.run.app",
    "https://frontendauth-6b5a3j5lyq-uc.a.run.app/signup",
    "https://frontendauth-6b5a3j5lyq-uc.a.run.app/signin",
  ],
  // origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you are using cookies or sessions
  exposedHeaders: ["set-cookie"],
};

const sessionOptions = {
  name: "sessionCookie",
  secret: "mysecret",
  saveUninitialized: false,
  resave: true,
  cookie: {
    secure: true,
    httpOnly: false,
    maxAge: 1000 * 60 * 30,
    sameSite: "none",
  },
};

module.exports = { corsOptions, sessionOptions };
