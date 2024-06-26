const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "MiniMessageBoard", messages: messages });
});

router.post("/new", function (req, res, next) {
  const messageText = req.body.message;
  const messageUser = req.body.author;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
