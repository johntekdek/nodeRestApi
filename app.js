const express = require("express");
const router = express.Router();
const app = express();
const settings = require("./settings");

const knex = require("knex")({
  client: "mysql",
  connection: settings.database
});

app.locals.knex = knex;

const routes = require("./routes");

router.get("/employees", routes.employees.listAllEmployees);

app.use("/api", router);

app.listen(settings.APIServerPort, () =>
  console.info(`Server is listening on ${settings.APIServerPort}`)
);
