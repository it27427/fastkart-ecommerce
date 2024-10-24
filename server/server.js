const app = require('@root/app');
const config = require('@root/config/config');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at http://localhost:${PORT}`.bgCyan
  );
});
