const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error('DB Error:', err));

module.exports = sequelize;