const app = require('./app');
const colors = require('colors');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at http://localhost/${PORT}`.bgMagenta
  );
});
