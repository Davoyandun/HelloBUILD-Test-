const axios = require("axios");
const users = [];


const registration = async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    if (users.map((e) => e.email).includes(email)) {
      return res.status(200).json({
        isDuplicate: true,
        data: [],
      });
    } else {
      let userInfo = {
        name,
        lastname,
        email,
        password,
        githubRepos: [],
        favoriteRepos:[]

      };
      users.push(userInfo);
      return res.status(200).json({
        isDuplicate: false,
        data: users,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      isDuplicate: false,
      data: users,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (users.map((e) => e.email).includes(email)) {
      const index = users.map((e) => e.email).indexOf(email);
      if (users[index].password === password) {
        return res.status(200).json({
          exist: true,
          isAccept: true,
          data: users[index],
        });
      } else {
        return res.status(200).json({
          exist: true,
          isAccept: false,
          data: [],
        });
      }
    } else {
      return res.status(200).json({
        exist: false,
        isAccept: false,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      exist: false,
      isAccept: false,
      data: [],
    });
  }
};

module.exports = { registration, login };
