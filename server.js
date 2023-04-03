const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//config environment variables in .env
dotenv.config({ path: './config.env' });

//connect to database
const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB)
  .then(() => {
    console.log('db connection successful!');
  })
  .catch((err) => {
    console.log(err);
  });

//app running
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
