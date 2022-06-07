import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.pausePlay = this.pausePlay.bind(this);
    this.state = {
      counter: 0,
      intervalId: 0
    };
  }

  pausePlay() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: 0 });
      return;
    }

    this.setState({ counter: 0 });
    const newIntervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
    this.setState({ intervalId: newIntervalId });
  }

  render() {
    const isPlaying = this.state.intervalId;
    const counter = this.state.counter;

    return (
      <div className="container">
        <div className="circle">
          <p>{counter}</p>
        </div>
        <i onClick={this.pausePlay} className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
      </div>

    );
  }
}

export default StopWatch;
