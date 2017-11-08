module.exports = function (sequelize, DataTypes) {
    
      var patient = sequelize.define('patient', {
        name : DataTypes.STRING,
        surname : DataTypes.STRING,
        age : DataTypes.INTEGER
      }, {
        classMethods: {
          associate: function (models) {
          }
        }
      });
    
      return patient;
    };