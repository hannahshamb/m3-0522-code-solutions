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

  render() {
    const { urls } = this.props;
    let { url } = this.state;

    if (url === undefined) {
      url = urls[0];
    }

    const circles = urls.map((item, index) => {
      let circle;
      if (item === url) {
        circle = <i key={index} className="fa-solid fa-circle fa-2xl px-2"></i>;
      } else circle = <i key={index} className="fa-regular fa-circle fa-2xl px-2"></i>;
      return circle;
    });

    setTimeout(() => {
      this.slideChange();
    }, '3000');

    return (
      <div className="container">
        <div className='row mt-5'>
          <div className="col d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-chevron-left fa-2xl"></i>
            <img className='mx-5 px-4' src={url} alt='pokemon' width="400"></img>
            <i className="fa-solid fa-chevron-right fa-2xl"></i>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5 w-100">
          {circles}
        </div>
      </div>
    );
  }
}
