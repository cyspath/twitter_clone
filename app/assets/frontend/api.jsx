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
  },

  getAllUsers() {
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
    .error(error => console.error());
  },

  followUser(userId) {
    $.post("/followers", { user_id: userId })
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower) )
    .error(error => console.error());
  }


}
