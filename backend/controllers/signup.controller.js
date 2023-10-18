const Model = require("../models/model");

module.exports = async (req, res) => {
  const { username, password, email } = req.body;
  const { isSuccesfull, message } = await Model.insertUser(
    username,
    password,
    email
  );

  if (isSuccesfull) {
    req.session.userSessionID = username;
    res.send({ isSuccesfull, message });
  } else {
    res.status(200).send({ isSuccesfull, message });
  }
};
