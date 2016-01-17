import React from 'react';
import ReactDOM from 'react-dom';

 import Tweet from "./tweet"

export default class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    return (
      <div className='input-field'>
        <ul className="collection" >
          {tweets }
        </ul>
      </div>
    )
  }
}
