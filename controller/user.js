const db = require("../model");
const User = db.models.User;

module.exports = {
  create: async (req, res) => {
    try {
      if ((req.body.username, req.body.password)) {
        const { username, password } = req.body;

        console.log(username, password);
        const _user = await User.create({
          username,
          password,
        });

        res.send(_user);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  findAll: async (req, res) => {
    try {
      const _user = await User.findAll();

      res.send(_user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
