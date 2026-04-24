const app = require('./Src/app');
const sequelize = require('./Src/Config/db');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Table synced');
  });

  
app.listen(3000, () => {
  console.log('Server running on port 3000');
});