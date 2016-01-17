/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	TweetActions.getAllTweets();
	
	var getAppState = function getAppState() {
	  return { tweetsList: TweetStore.getAll() };
	};
	
	// let mockTweets = [
	//   { id: 1, name: 'Mike Li', body: "whaever" },
	//   { id: 2, name: 'Jane Sun', body: "Coolnes" },
	//   { id: 3, name: 'Steph Qu', body: "rotflcat" }
	// ]
	
	var Main = React.createClass({
	  displayName: "Main",
	
	  getInitialState: function getInitialState() {
	    return getAppState();
	  },
	
	  componentDidMount: function componentDidMount() {
	    TweetStore.addChangeListener(this._onChange);
	    // $.ajax("/tweets")
	    // .success(data => this.setState(this.formattedTweets(data)) )
	    // .error(error => console.log(error));
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    TweetStore.removeChangeListener(this._onChange);
	  },
	
	  _onChange: function _onChange() {
	    // this.forceUpdate();
	    this.setState(getAppState());
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "container" },
	      React.createElement(TweetBox, null),
	      React.createElement(TweetList, { tweets: this.state.tweetsList })
	    );
	  }
	});
	
	var documentReady = function documentReady() {
	  var reactNode = document.getElementById('react');
	  if (reactNode) {
	    React.render(React.createElement(Main, null), reactNode);
	  }
	};
	
	$(documentReady);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map