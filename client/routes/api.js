const router = require("express").Router();
const Book = require("../../models/book.js");
//const proxy = require("../package.json");

router.post(`/books`, (req, res) => {
  console.log("Body", req.body);
  const data = req.body;
  const newBookSave = new Book(data);

  Book.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Internal server error..." });
      return;
    }

    return res.json({
      msg: "Data has been saved"
    });
  });
});

router.get(`/books`, (req, res) => {
  Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;