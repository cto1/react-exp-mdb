import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
  }

  onEmailChange = ({ target: { value: email } }) => {
    this.setState({ email })
  }

  onPasswordChange = ({ target: { value: password } }) => {
    this.setState({ password })
  }

  onSubmit = () => {
    const { state: { email, password } } = this;

    console.log('submit: ', email, password);
  }

  render() {
    const { onEmailChange, onPasswordChange, onSubmit } = this;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3>Signup</h3>
        <p><span>Email:</span><span>{this.state.email}</span></p>
        <p><span>Password:</span><span>{this.state.password}</span></p>
        <form style={{ width: 500 }}>
          <TextField
            hintText="E-mail"
            floatingLabelText="Set your email address"
            onChange={onEmailChange}
            floatingLabelFixed
          />
          <br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            onChange={onPasswordChange}
            type="password"
          />
          <br />
          <RaisedButton label="Submit" style={style} onClick={onSubmit} />
        </form>
    </div>
  );
  }
}
