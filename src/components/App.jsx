class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
    this.state = {playingVideo: window.exampleVideoData[0]};
  }

  onVideoClick(video) {
    console.log('We have click!');
    console.log('state before: ', this.state);
    this.state.playingVideo = video;
    // this.setState({
    //   playingVideo: !this.state.clicked
      //clicked: function() { console.log('another test'); }
    //});
    console.log('state after: ', this.state);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.playingVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} onVideoTitleClick={this.onVideoClick} value={this}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
