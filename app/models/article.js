// Example model


module.exports = function (sequelize, DataTypes) {

  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
      }
    }
  });

  return Article;
};
