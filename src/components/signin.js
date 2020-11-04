import React from 'react'
import InputField from './inputfield'
import SignInButton from './signinbutton'

class SigninCard extends React.Component {

  render() {
    return(
      <div class="signin_card">
        <h1></h1>
        <InputField />
        <InputField />  
        <SignInButton />
        <p>Reset Password</p>
      </div>
    )
  }
}

export default SigninCard