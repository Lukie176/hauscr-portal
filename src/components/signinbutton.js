import React from 'react'
import style from './passwordreset.module.css'

class SignInButton extends React.Component {
  render() {
    const login_button = {
      backgroundColor: "rgba(174, 54, 70, 0.6)",
      color: "white",
      border: '2px solid #FFFFFF',
      borderRadius: "10px",
      padding: '10px',
      width: '65%',
      marginBottom: '20px', 
      height: "10vh",
      fontFamily: 'Source Sans Pro',
      fontSize: '50px',
      lineHeight: '63px',
      fontStyle: 'normal',
      fontWeight: '600',
    }
    
    return (
      <button style={login_button}>Log In</button>
    )
  }
}

export default SignInButton