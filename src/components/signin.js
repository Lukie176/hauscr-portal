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
      border: '4px solid #FFFFFF',
      borderRadius: "10px",
      height: "70vh",
    }

    const header_style = {
      textTransform: "uppercase",
      color: "white",
      opacity: "1 !important",
    }

    const spacer = {
      background: 'transparent',
      height: '10vh'
    }

    const spacer2 = {
      background: 'transparent',
      height: '5vh'
    }

    //refresh on the callback functions where you can modify state of the parent component
    return(
      <div>
        <div style={signin_card}>
          <div className="spacer2" style={spacer2}></div> 
          <h1 style={header_style}>Sign In</h1>
          <InputField placeholder="Username"/>
          <InputField placeholder="Password"/> 
          <div className="spacer" style={spacer}></div> 
          <SignInButton />
          <p onClick={() => this.openPasswordReset()}>Reset Password</p>
        </div>
        <div>
          {!this.state.isHidden && <PasswordResetCard />}
        </div>
      </div>
    )
  }
}

export default SigninCard