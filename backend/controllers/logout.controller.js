module.exports = async (req, res) => {
  req.session.destroy();
  res.clearCookie("sessionCookie").sendStatus(204);
};
