module.exports = async (req, res) => {
  res.status(200).send({
    isAuthenticated: req.session.userSessionID ? true : false,
  });
};
