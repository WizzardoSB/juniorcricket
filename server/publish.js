Meteor.publish("players", function () {
  return Players.find({owner: this.userId});
});

Meteor.publish("games", function () {
  return Games.find({owner: this.userId});
});
