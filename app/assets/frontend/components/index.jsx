import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

import TweetBox from './tweetBox';
import TweetList from './tweetList';

import TweetActions from "../actions/tweetActions";
import TweetStore from "../stores/tweetStore";

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }
}

// let mockTweets = [
//   { id: 1, name: 'Mike Li', body: "whaever" },
//   { id: 2, name: 'Jane Sun', body: "Coolnes" },
//   { id: 3, name: 'Steph Qu', body: "rotflcat" }
// ]

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { tweetsList: [] }
    this.state = getAppState();
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    // this.forceUpdate();
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">

        <Link to="/follow">Who to follow</Link>

        <TweetBox />
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}
