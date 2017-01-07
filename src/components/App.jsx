class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log('props: ', props);
    this.state = {
      clicked: false,
      currentVideo: window.exampleVideoData[0]
    };
  }

  onVideoClick(video, event) {
    console.log('We have click!');
    this.setState({
      clicked: !this.state.clicked,
      currentVideo: video
    });  
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} onVideoTitleClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
