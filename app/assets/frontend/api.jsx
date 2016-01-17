import ServerActions from "./actions/serverActions"
export default {

  getAllTweets() {
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.error());
  },

  createTweet(body) {
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweets(rawTweet) )
    .error(error => console.error());
  }

}
