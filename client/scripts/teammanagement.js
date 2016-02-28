Meteor.subscribe("players");

Template.homeTeam.events({
    "submit .new-player": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.player.value;

      Meteor.call("addPlayer", text);

      // Clear form
      event.target.player.value = "";
    }
});

Template.homeTeam.helpers({players: function () {
      console.log("Finding players");
      return Players.find({}, {sort: {text: 1}});
      }
    });


Template.homeTeam.events({
    "click .delete": function () {
          Meteor.call("deletePlayer", this._id);
      }
});
