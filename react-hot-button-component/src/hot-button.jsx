import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      click: 0
    };
  }

  handleClick() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    const click = this.state.click;
    const classArray = ['btn-dark-purple', 'btn-light-purple', 'btn-red', 'btn-orange', 'btn-yellow', 'btn-white'];

    let index = Math.floor(click / 3);
    if (index >= (classArray.length - 1)) {
      index = classArray.length - 1;
    }

    const colorClass = classArray[index];
    return (
      <button className={`btn ${colorClass}`} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default HotButton;
