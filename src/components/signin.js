import React from 'react'
import InputField from './inputfield'
import SignInButton from './signinbutton'
import PasswordResetCard from './passwordreset'
import styles from './passwordreset.module.css'

class SigninCard extends React.Component {

  openPasswordReset = () => {
    var password_reset_modal = document.getElementById("reset_password_modal_canvas")
    //console.log(password_reset_modal);
    password_reset_modal.style.visibility = "visible"
  }

  render() {
    const signin_card = {
      border: '4px solid #FFFFFF',
      borderRadius: "10px",
      height: "70vh",
    }

    const header_style = {
      marginBottom: "0 !important",
      textTransform: "uppercase",
      fontFamily: "Bebas Neue",
      fontSize: "100px",
      lineHeight: "120px",
      src: "url('/BebasNeue-Regular.ttf')",
      color: "white",
    }

    const spacer = {
      background: 'transparent',
      height: '10vh'
    }

    const spacer2 = {
      background: 'transparent',
      height: '5vh'
    }

    const reset_password = {
      fontFamily: 'Source Sans Pro',
      color: "white",
      fontSize: "20px",
      lineHeight: "25px",
      marginBottom: "20px"
    }

    const signin_divider = {
      width: "40%",
      marginTop: "0 !important",
      marginBottom: "60px",
      border: "0",
      borderBottom: "5px solid #FFFFFF",
      borderRadius: "3px",
      padding: "0",
      display: "block"
    }

    //refresh on the callback functions where you can modify state of the parent component
    return(
      <div>
        <div style={signin_card}>
          <div className="spacer2" style={spacer2}></div> 
          <h1 style={header_style}>Sign In</h1>
          <hr className="signin_divider" style={signin_divider} />
          <InputField placeholder="Username"/>
          <InputField placeholder="Password"/> 
          <div className="spacer" style={spacer}></div> 
          <SignInButton />
          <p style={reset_password} onClick={() => this.openPasswordReset()}>Reset Password</p>
        </div>
        <div>
          {<PasswordResetCard />}
        </div>
      </div>
    )
  }
}

export default SigninCard