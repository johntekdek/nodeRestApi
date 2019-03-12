const express = require ('express');
const app = express ();
const router = express.Router ();
const settings = require ('./settings');
const routes = require ('./routes');
const middlewares = require ('./middlewares');
const bodyParser = require ('body-parser');
const MongoClient = require ('mongodb').MongoClient;

const mongo_uri = `mongodb://${settings.database.host}:${settings.database.port}`;

app.use ('/api', router);

const jsonParser = bodyParser.json ();

router.get ('/employees', routes.employees.listAllEmployees);
router.get (
  '/employees/:id',
  middlewares.getIDAsInteger,
  routes.employees.listAllEmployee
);
router.post ('/employees', routes.employees.createEmployee);
router.patch ('/employees', routes.employees.createEmployee);
router.delete (
  '/employees/:id',
  middlewares.getIDAsInteger,
  routes.employees.deleteEmployee
);
router.get ('./departments', routes.departments.listAllDepartments);
router.get ('./departments/:id', routes.departments.listAllDepartments);
router.get (
  '/departments/:id/employees',
  routes.departments.getDepartmentEmployees
);
router.post ('./departments', jsonParser, routes.departments.createDepartment);

MongoClient.connect (mongo_uri, {useNewUrlParser: true})
  .then (client => {
    const db = client.db ('project');
    const collection = db.collection ('employess');
    app.locals.collection = collection;
    app.listen (settings.APIServerPort, () =>
      console.info (`Server is listening on ${settings.APIServerPort}`)
    );
  })
  .catch (error => console.error (error));
