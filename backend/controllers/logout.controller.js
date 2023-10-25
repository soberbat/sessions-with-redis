module.exports = async (req, res) => {
  req.session.destroy();
  res.clearCookie("sessionCookie").status(200).redirect("/");
};
