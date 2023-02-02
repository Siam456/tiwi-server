const dbconfig = require("../configs/db_config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.user,
  dbconfig.password,
  {
    host: dbconfig.host,
    port: dbconfig.port,
    dialect: dbconfig.dialect,
  }
);

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.User = require("./user")(sequelize, Sequelize.DataTypes);
db.models.Module = require("./module")(sequelize, Sequelize.DataTypes);
db.models.tutorials = require("./tutorial.model")(sequelize, Sequelize);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

//1 to many relation
db.models.Module.hasMany(db.models.tutorials, {
  forigenKey: "moduleId",
  as: "tutorials",
});
db.models.tutorials.belongsTo(db.models.Module, {
  forigenKey: "moduleId",
  as: "Module",
});

module.exports = db;
