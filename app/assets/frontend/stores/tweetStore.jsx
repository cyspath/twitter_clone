import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

import { EventEmitter } from "events";

var _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {

  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

var TweetStore = new TweetEventEmitter();

AppDispatcher.register( function(action) {
    switch(action.actionType) {
      case ActionTypes.RECEIVED_TWEETS:
        // acknowldege tweets
        _tweets = action.rawTweets;
        // emit a change event
        TweetStore.emitChange();
        break;

      case ActionTypes.RECEIVED_ONE_TWEET:
        _tweets.unshift(action.rawTweet);
        TweetStore.emitChange();
        break;

      default:
        // no op
    }
})

export default TweetStore;
