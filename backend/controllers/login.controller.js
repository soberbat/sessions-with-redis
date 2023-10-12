const Model = require("../models/model");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const { isSuccesfull, message } = await Model.checkIfUserExists(
    username,
    password
  );

  console.log(isSuccesfull);

  if (isSuccesfull) {
    req.session.userSessionID = username;
    res.status(200).send({ isSuccesfull, message });
  } else {
    res.status(200).send({ isSuccesfull, message });
  }
};
