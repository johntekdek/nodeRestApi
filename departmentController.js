function listAllDepartments (req, res) {
    const { collection }= req.app.locals;
    collection.distinct("department.name")
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error));

}

function getDepartmentEmployees (req, res) {}


module.exports = {
  listAllDepartments,
  getDepartmentEmployees,
};
