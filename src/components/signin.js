import React from 'react'
import InputField from './inputfield'
import SignInButton from './signinbutton'

class SigninCard extends React.Component {

  render() {
    const signin_card = {
      height: "100%",
    }

    const header_style = {
      textTransform: "uppercase",
      color: "white",
      opacity: "1 !important",
    }

    return(
      <div style={signin_card}>
        <h1 style={header_style}>Sign In</h1>
        <InputField placeholder="Username"/>
        <InputField placeholder="Password"/>  
        <SignInButton />
        <p>Reset Password</p>
      </div>
    )
  }
}

export default SigninCard