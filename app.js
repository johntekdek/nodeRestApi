const express = require("express");
const router = express.Router();
const app = express();
const settings = require("./settings");
const mysql = require("mysql");
const connection = mysql.createConnection(settings.database);
const routes = require("./routes");

router.get("/employees", routes.employees.listAllEmployess);

app.use("/api", router);

connection.connect(error => {
  if (error) {
    console.error("Error connectinf to the database ", error);
    return process.exit();
  }

  app.listen(settings.APIServerPort, () =>
    console.info(`Server is listening on ${settings.APIServerPort}`)
  );
});
