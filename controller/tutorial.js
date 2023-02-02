const db = require("../model");
const tutorial = db.models.tutorials;

module.exports = {
  create: async (req, res) => {
    try {
      let video = "";
      let attachments = [];
      for (const file of req.files) {
        // fieldname
        if (file.fieldname === "video") {
          video = file.filename;
        } else {
          attachments.push(`/static/${file.filename}`);
        }
      }
      console.log(attachments);
      // const video = req.files[0].filename;
      const { title, description, moduleId } = req.body;

      const _tutorial = await tutorial.create({
        title,
        description,
        videos: `/static/${video}`,
        moduleId,
        attachments: attachments.join(", "),
      });

      res.send(_tutorial);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  findAll: async (req, res) => {
    try {
      const _tutorial = await tutorial.findAll();

      res.send(_tutorial);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
