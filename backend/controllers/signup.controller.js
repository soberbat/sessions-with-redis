const Model = require("../models/model");

module.exports = async (req, res) => {
  const { username, password, email } = req.body;
  const { isSuccesfull, message } = await Model.insertUser(
    username,
    password,
    email
  );

  if (isSuccesfull) {
    // console.log(req.session);
    req.session.userSessionID = username;

    console.log("------new versionNew");
    // res
    //   .cookie("sessionCookie", username, {
    //     httpOnly: true,
    //     expires: new Date(Date.now() + 8 * 3600000),
    //     sameSite: "None",
    //     secure: true,
    //     path: "/",
    //   })
    res.send({ isSuccesfull, message });
  } else {
    res.status(200).send({ isSuccesfull, message });
  }
};
