import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginFormContainer,
  LoginImage,
  UserNameContainer,
  Label,
  Input,
  CheckBox,
  ShowPassword,
  UserNameContainers,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShowed: false,
    showError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickBox = () => {
    this.setState(prevState => ({isShowed: !prevState.isShowed}))
  }

  render() {
    const {isShowed, showError, errorMsg} = this.state
    const showPassword = isShowed ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginFormContainer onSubmit={this.submitForm}>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <UserNameContainer>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeName}
            />
          </UserNameContainer>
          <UserNameContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type={showPassword}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </UserNameContainer>
          <UserNameContainers>
            <CheckBox id="checkbox" type="checkbox" onClick={this.onClickBox} />
            <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
          </UserNameContainers>
          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
