import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
    this.state = { isOn: false };
  }

  toggleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const isOn = this.state.isOn;
    return (
    <div className='container'>
      <div onClick={this.toggleClick} className={`switch ${isOn ? 'switch-on' : 'switch-off'}`}>
        <div className="white-knob"></div>
      </div>
        <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
    );
  }

}

export default ToggleSwitch;
