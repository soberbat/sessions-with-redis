const Model = require("../models/model");

const PORT = process.env.PORT;

module.exports = async (req, res) => {
  console.log(`---Request is made to ${PORT}`);

  const { username, password, email } = req.body;
  const { isSuccesfull, message } = await Model.insertUser(
    username,
    password,
    email
  );

  if (isSuccesfull) {
    req.session.userSessionID = username;
    res.status(200).send({ isSuccesfull, message });
  } else {
    res.status(200).send({ isSuccesfull, message });
  }
};
