

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }
}

// let mockTweets = [
//   { id: 1, name: 'Mike Li', body: "whaever" },
//   { id: 2, name: 'Jane Sun', body: "Coolnes" },
//   { id: 3, name: 'Steph Qu', body: "rotflcat" }
// ]

var Main = React.createClass({


  getInitialState: function() {
    return (getAppState())
  },

  componentDidMount: function() {
    TweetStore.addChangeListener(this._onChange)
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)) )
    // .error(error => console.log(error));
  },

  componentWillUnmount: function() {
    TweetStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    // this.forceUpdate();
    this.setState(getAppState());
  },

  render: function() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    )
  }
})

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
