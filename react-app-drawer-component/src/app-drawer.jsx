import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = { menuOpen: false };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    let menuClass = 'hide-menu';
    let overlayClass = '';
    const games = ['League of Legends', 'League of Legends: Wild Rift', 'Legends of Runeterra', 'Valorant', 'Teamfight Tactics'];
    const menuItems = games.map((game, index) => <li key={index}> {game} </li>);
    const menuOpen = this.state.menuOpen;

    menuClass = menuOpen ? '' : 'hide-menu';
    overlayClass = menuOpen ? 'overlay' : '';

    return (
      <div className=''>
        <div className={overlayClass}>
          <i onClick={this.handleMenuClick} className="fa-solid fa-bars fa-2x"></i>
        </div>
        <div className='background'>
          <img src="riot-logo.png"></img>
        </div>
        <div className={`menu ${menuClass}`}>
          <ul onClick={this.handleMenuClick}>
            <h2>Choose a Game!</h2>
            {menuItems}
          </ul>
        </div>
    </div>
    );

  }
}

export default Drawer;
