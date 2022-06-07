import React from 'react';

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const password = this.state.password;

    let errorMsg;
    let errorClass;
    let classMark;

    const specialChars = string => /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(string);
    const isUpperCase = string => /[A-Z]/.test(string);
    const isNum = string => /\d/.test(string);

    if (!password) {
      errorMsg = 'A password is required.';
      errorClass = '';
      classMark = 'fa-xmark';
    } else if (password && password.length < 8) {
      errorClass = '';
      errorMsg = 'Your password is too short.';
    } else if (password.length >= 8 && specialChars(password) && isUpperCase(password) && isNum(password)) {
      classMark = 'fa-check';
      errorClass = 'hidden';
    } else {
      errorClass = '';
      errorMsg = 'Your password must contain a digit, captial letter, and special character.';
    }

    return (
      <form>
        <label htmlFor="password">Password
          <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}>
            </input>
          <i className={`fa-solid ${classMark}`}></i>
        </label>
        <p className={errorClass}>{errorMsg}</p>
      </form>
    );
  }
}

export default PasswordForm;
