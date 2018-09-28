const getItems = (req, res) => {
  let db = req.app.get("db");
  db.getItems().then(response => {
    res.status(200).json(response);
  });
};

const removeItem = (req, res) => {
  console.log(req.params);
  let db = req.app.get("db");
  db.deleteItem(req.params.id).then(response => {
    res.status(200).json(response);
  });
};

const addItem = (req, res) => {
  // console.log(req.body);
  const { name, price } = req.body;
  let db = req.app.get("db");
  db.addItem([name, price]).then(response => {
    res.status(200).json(response);
  });
};

const updatePrice = (req, res) => {
  console.log(req.body, req.params);
  const { price } = req.body;
  const { id } = req.params;
  let db = req.app.get("db");
};

module.exports = {
  getItems,
  removeItem,
  addItem
};
