import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username
          <input
          name='username'
          type='text'
          value={this.state.username}
          onChange={this.handleUsernameChange}/>
        </label>
        <label>Password
          <input
          name='password'
          type='password'
          value={this.state.password}
          onChange={this.handlePasswordChange}
          autoComplete='on'/>
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <RegistrationForm />;

root.render(element);
