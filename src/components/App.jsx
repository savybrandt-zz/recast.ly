class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  onVideoClick() {
    console.log('We have click!');
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={window.exampleVideoData[0]} />
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} />
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
