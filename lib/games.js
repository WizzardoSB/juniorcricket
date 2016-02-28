Games = new Mongo.Collection("games");

Meteor.methods({
  addGame: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Games.insert({
      opposition: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
    });

    console.log("Game created.");
  },
  deleteGame: function (gameId) {

    var game = Games.findOne(gameId);
    if (game.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Games.remove(gameId);

    console.log("Game deleted.")
  },
});
