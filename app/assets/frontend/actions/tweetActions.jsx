var TweetActions = {

  getAllTweets() {
    API.getAllTweets();
  },

  sendTweet(body) {
    API.createTweet(body)
  }

}
