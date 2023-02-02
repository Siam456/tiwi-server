module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define("module", {
    title: {
      type: DataTypes.STRING,
    },
  });

  return Module;
};
