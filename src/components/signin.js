import React from 'react'
import InputField from './inputfield'
import SignInButton from './signinbutton'

class SigninCard extends React.Component {

  render() {
    const signin_card = {
      margin: "20%",
    }

    return(
      <div style={signin_card}>
        <h1>Sign In</h1>
        <InputField placeholder="Username"/>
        <InputField placeholder="Password"/>  
        <SignInButton />
        <p>Reset Password</p>
      </div>
    )
  }
}

export default SigninCard