import TweetBox from './components/tweetBox';
import TweetList from './components/tweetList';

import TweetActions from "./actions/tweetActions";
import TweetStore from "./stores/tweetStore";

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }
}

// let mockTweets = [
//   { id: 1, name: 'Mike Li', body: "whaever" },
//   { id: 2, name: 'Jane Sun', body: "Coolnes" },
//   { id: 3, name: 'Steph Qu', body: "rotflcat" }
// ]

class Main extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { tweetsList: [] }
    this.state = getAppState();
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange)
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)) )
    // .error(error => console.log(error));
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
        <TweetBox />
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    React.render(
      <Main />,
      reactNode
    );
  }
};

$(documentReady);
