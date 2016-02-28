Players = new Mongo.Collection("players");

Meteor.methods({
  addPlayer: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Players.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
    });

    console.log("Player inserted.");
  },
  deletePlayer: function (playerId) {

    var player = Players.findOne(playerId);
    if (player.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Players.remove(playerId);

    console.log("Player deleted.")
  },
});
