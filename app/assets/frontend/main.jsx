import TweetBox from './components/tweetBox';
import TweetList from './components/tweetList';

let mockTweets = [
  { id: 1, name: 'Mike Li', body: "whaever" },
  { id: 2, name: 'Jane Sun', body: "Coolnes" },
  { id: 3, name: 'Steph Qu', body: "rotflcat" }
]

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tweetsList: [] }
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

    this.setState({ tweetsList: newTweetsList });
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
