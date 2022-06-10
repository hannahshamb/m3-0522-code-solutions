import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: null
    };
  }

  handleClick(id) {
    let activeId = id;

    if (this.state.activeId === id) {
      activeId = null;
    }

    this.setState({ activeId });
  }

  render() {
    const topics = this.props.topics;

    return (
      <div className='container'>
      {topics.map(topic => {
        return (
          <div className='topic-container' key={topic.id}>
            <div className='topic' onClick={() => this.handleClick(topic.id)}>{topic.topic}</div>
            {
              this.state.activeId === topic.id
                ? (
                  <div className='topic-content'>{topic.content}</div>
                  )
                : null
            }
          </div>
        );
      })}
      </div>
    );
  }
}

export default Accordion;
