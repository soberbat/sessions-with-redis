const db = require("../utilies/connectdb");
const sql = require("./config");

module.exports = {
  insertUser: async function insertUser(username, password, email) {
    try {
      await db.execute(sql.insertUserSQL, [username, password, email]);
      return { message: sql.success, isSuccesfull: true };
    } catch (error) {
      console.log(error);
      return { message: sql.userExist, isSuccesfull: false };
    }
  },
  checkIfUserExists: async function (username, password) {
    try {
      const [response] = await db.execute(sql.checkIfUserExist, [username]);

      const userExist = response.length >= 1;
      if (!userExist) {
        return { message: sql.userDoesntExist, isSuccesfull: false };
      }

      const userData = response[0];
      const isPasswordCorrect = module.exports.checkPassword(
        userData,
        password
      );

      return {
        isSuccesfull: isPasswordCorrect,
        message: isPasswordCorrect ? sql.success : sql.wrongPassword,
      };
    } catch (error) {
      console.log(error);
    }
  },
  checkPassword: function (userData, password) {
    if (userData.password === password) return true;
    return false;
  },
};
