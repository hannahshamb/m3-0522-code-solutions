import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.slideChange = this.slideChange.bind(this);
  }

  slideChange() {
    const { urls } = this.props;
    const { url } = this.state;
    let nextUrl;

    if (url !== undefined) {
      urls.forEach((item, index) => {
        if (item === url) {
          nextUrl = urls[index + 1];
        }
      });
    } else {
      nextUrl = urls[1];
    }

    this.setState({ url: nextUrl });
  }

  nextImage(event) {
    const { urls } = this.props;
    const { url } = this.state;
    let nextUrl;

    if (url !== undefined) {
      urls.forEach((item, index) => {
        if (item === url) {
          nextUrl = urls[index + 1];
        }
      });
    }

    this.setState({ url: nextUrl });
    const timeoutId = event.target.getAttribute('timeoutid');
    clearTimeout(timeoutId);
  }

  previousImage(event) {
    const { urls } = this.props;
    const { url } = this.state;
    let nextUrl;

    if (url !== undefined) {
      urls.forEach((item, index) => {
        if (item === url) {
          if (index !== 0) {
            nextUrl = urls[index - 1];
          } else {
            nextUrl = urls[urls.length - 1];
          }
        }
      });
    }

    this.setState({ url: nextUrl });
    const timeoutId = event.target.getAttribute('timeoutid');
    clearTimeout(timeoutId);
  }

  specificIndex(event) {
    const { urls } = this.props;

    const selectionIndex = event.target.getAttribute('selection');
    const nextUrl = urls[selectionIndex];

    this.setState({ url: nextUrl });
    const timeoutId = event.target.getAttribute('timeoutid');
    clearTimeout(timeoutId);
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
        circle = <i key={index} selection={index} onClick={this.specificIndex} timeoutid={timeoutId} className="fa-solid fa-circle fa-2xl px-2"></i>;
      } else circle = <i key={index} selection={index} onClick={this.specificIndex} timeoutid={timeoutId} className="fa-regular fa-circle fa-2xl px-2"></i>;
      return circle;
    });

    return (
      <div className="my-container">
        <div className='row w-100 mt-5'>
          <div className="col d-flex align-items-center justify-content-center">
            <i onClick={this.previousImage} timeoutid={timeoutId} className="fa-solid fa-chevron-left fa-2xl"></i>
            <img className='mx-5 img' src={url} alt='pokemon'></img>
            <i onClick={this.nextImage} timeoutid={timeoutId} className="fa-solid fa-chevron-right fa-2xl"></i>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 w-100">
          {circles}
        </div>
      </div>
    );
  }
}
