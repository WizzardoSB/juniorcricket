Router.configure({
  layoutTemplate : 'home',
  loadingTemplate : 'loading',
  notFoundTemplate : 'notFound'
});

Router.route("/", {
  name : "homeIndex"
});

Router.route("/contact", {
  name : "homeContact"
});

Router.route("/team", {
  name : "homeTeam"
});

Router.route("/games", {
  name : "homeGames"
});

Router.route("/about", {
  name : "homeAbout"
});
