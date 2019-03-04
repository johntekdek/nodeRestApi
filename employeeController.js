function listAllEmployees(req, res) {
  const { knex } = req.app.locals;
  knex
    .select("*")
    .from("employees")
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
}

module.exports = {
  listAllEmployees
};
