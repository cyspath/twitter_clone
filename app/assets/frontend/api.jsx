API = {

  getAllTweets: function() {
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.error());
  },

  createTweet: function(body) {
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweets(rawTweet) )
    .error(error => console.error());
  }

}
