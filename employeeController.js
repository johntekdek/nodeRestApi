const data = require ('./data');
function listAllEmployess (req, res) {
  return res.status (200).json (data);
}

module.exports = {
  listAllEmployess,
};
