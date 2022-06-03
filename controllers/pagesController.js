const { Article } = require("../models");

exports.home = (req, res) => {
  const title = "Hello World",
    subTitle = "Welcome to the world";
  res.render("index", { title, subTitle });
};

exports.about = (res, req) => {
  res.render("about", { title: "About" });
};

exports.articles = (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles", { title: "Articles", articles });
  });
};
