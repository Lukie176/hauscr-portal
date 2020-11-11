import React from 'react'
import InputField from './inputfield'
import SignInButton from './signinbutton'
import PasswordResetCard from './passwordreset'

class SigninCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
  }

  openPasswordReset() {
    console.log("password reset is being called");
    var current = this.state.isHidden
    this.setState({
      isHidden: !current
    })
  }

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
        <h1 style={header_style} onClick={() => console.log("is onclick wrokign?")}>Sign In</h1>
        <InputField placeholder="Username"/>
        <InputField placeholder="Password"/>  
        <SignInButton />
        {!this.state.isHidden && <PasswordResetCard />}
        <input />
        <p onClick={() => this.openPasswordReset()}>Reset Password</p>
      </div>
    )
  }
}

export default SigninCard