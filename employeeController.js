function listAllEmployees(req, res) {
  const { collection } = req.app.locals;
  collection.find({}).toArray()
  .then(response => res.status(200).json(response))
  .catch(error => console.error(error));

}

function listOneEmployee(req, res) {

}

function createEmployee(req, res) {

}
function updateEmployee(req, res) {

}

module.exports = {
  listAllEmployees
};
