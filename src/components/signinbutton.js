import React from 'react'

class SignInButton extends React.Component {
  render() {
    const login_button = {
      backgroundColor: "rgba(174, 54, 70, 0.6)",
      color: "white",
      borderRadius: "7px",
      height: "20%"
    }
    
    return (
      <button style={login_button}>Log In</button>
    )
  }
}

export default SignInButton