const db = require("../model");
const Module = db.models.Module;
const tutorial = db.models.tutorials;

module.exports = {
  create: async (req, res) => {
    try {
      const { title } = req.body;

      const _Module = await Module.create({
        title,
      });

      res.send(_Module);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  findAll: async (req, res) => {
    try {
      const _Module = await Module.findAll();

      res.send(_Module);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  findModuleWithId: async (req, res) => {
    try {
      const _Module = await Module.findAll({
        include: [
          {
            model: tutorial,
            as: "tutorials",
          },
        ],
        where: { id: req.params.id },
      });

      res.send(_Module);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
