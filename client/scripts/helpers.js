Template.registerHelper("simpleDate", function(date){
    return moment(date).format("MMM Do YYYY");
});
