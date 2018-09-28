const getItems = (req, res) => {
  let db = req.app.get("db");
  db.getItems().then(response => {
    res.status(200).json(response);
  });
};

module.exports = {
  getItems
};
