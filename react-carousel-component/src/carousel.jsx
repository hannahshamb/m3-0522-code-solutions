import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.slideChange = this.slideChange.bind(this);
  }

  slideChange(event) {
    const { urls } = this.props;
    const { url } = this.state;

    let nextUrl;

    if (url !== undefined) {
      urls.forEach((item, index) => {
        if (item === url) {
          if (event === undefined || event.target.getAttribute('action') === 'next') {
            nextUrl = urls[index + 1];
          } else if (event.target.getAttribute('action') === 'previous') {
            if (index !== 0) {
              nextUrl = urls[index - 1];
            } else {
              nextUrl = urls[urls.length - 1];
            }
          } else if (event.target.getAttribute('action') === 'target') {
            const selectionIndex = event.target.getAttribute('selection');
            nextUrl = urls[selectionIndex];
          }
        }
      });
    } else {
      nextUrl = urls[1];
    }

    this.setState({ url: nextUrl });
    if (event !== undefined) {
      const timeoutId = event.target.getAttribute('timeoutid');
      clearTimeout(timeoutId);
    }

  }

  render() {
    const { urls } = this.props;
    let { url } = this.state;

    const timeoutId = setTimeout(() => {
      this.slideChange();
    }, '3000');

    if (url === undefined) {
      url = urls[0];
    }

    const circles = urls.map((item, index) => {
      let circle;
      if (item === url) {
        circle = <i key={index} selection={index} onClick={this.slideChange} action='target' timeoutid={timeoutId} className="fa-solid fa-circle fa-2xl px-2"></i>;
      } else circle = <i key={index} selection={index} onClick={this.slideChange} action='target' timeoutid={timeoutId} className="fa-regular fa-circle fa-2xl px-2"></i>;
      return circle;
    });

    return (
      <div className="my-container">
        <div className='row w-100 mt-5'>
          <div className="col d-flex align-items-center justify-content-center">
            <i onClick={this.slideChange} action='previous' timeoutid={timeoutId} className="fa-solid fa-chevron-left fa-2xl"></i>
            <img className='mx-5 img' src={url} alt='pokemon'></img>
            <i onClick={this.slideChange} action='next' timeoutid={timeoutId} className="fa-solid fa-chevron-right fa-2xl"></i>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 w-100">
          {circles}
        </div>
      </div>
    );
  }
}
