const { DataTypes } = require('sequelize');
const sequelize = require('../Config/db');

const Signup = sequelize.define('Signup', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  zip: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [6, 100] // password length
    }
  }

}, {
  tableName: 'signups',
  timestamps: true // ✅ added
});

module.exports = Signup;