class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log('props: ', props);
    this.state = {
      clicked: false,
      currentVideo: window.exampleVideoData[0],
      searchResults: window.exampleVideoData,
      input: ''
    };
  }

  onVideoClick(video, event) {
    console.log('We have click!');
    this.setState({
      clicked: !this.state.clicked,
      currentVideo: video
    });  
  }

  onSearchChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  onSearchSubmit(event) {
    console.log('search started: query: ', this.state.input);

    var searchOptions = {
      key: window.YOUTUBE_API_KEY, 
      query: this.state.input, 
      max: 5
    };

    var callback = function(data) {
      console.log('do something with search data');
      this.setState({
        currentVideo: data[0],
        searchResults: data
      });
    }.bind(this);

    window.searchYouTube(searchOptions, callback);
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.onSearchSubmit.bind(this)} onInput={this.onSearchChange.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.searchResults} onVideoTitleClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
