Meteor.subscribe("games");

Template.homeGames.events({
    "submit .new-game": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.opposition.value;

      Meteor.call("addGame", text);

      // Clear form
      event.target.opposition.value = "";
    }
});

Template.homeGames.helpers({games: function () {
      return Games.find({}, {sort: {createdAt: 1}});
      }
});

Template.homeGames.events({
    "click .delete": function () {
          Meteor.call("deleteGame", this._id);
      },
    "click .scorethis": function () {
          console.log("scoring " + this._id);
      }
});
