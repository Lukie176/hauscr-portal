import React from 'react';
//this cannot be rendered inside another component, will mess up all the styling
import styles from './PasswordReset.module.css'

class PasswordResetCard extends React.Component {
  render() {
    const imageAdjust = {
      width: "116px",
      height: "30px",
      zIndex: '10',
      marginTop: "10%",
      marginBottom: "20px",
    }

    const password_reset_title = {
      fontFamily: "Bebas Neue",
      marginBottom: "0",
      src: "url('/BebasNeue-Regular.ttf')",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "70px",
      lineHeight: "84px",
      color: "#FFFFFF",
      textTransform: "uppercase"
    }

    const passwordResetCard = {
      //opacity: "0",
      //transition: "opacity 400ms ease-in",
      padding: "20px",
      position: "absolute",
      width: "35%",
      height: "auto",
      margin: "auto",
      background: "#AE3646",
      borderRadius: "19px",
      border: "5px solid #FFFFFF",
    }

    const background_modal = {
      height: "100%",
      zIndex: "50",
      display: "flex",
      backdropFilter: "opacity(30%)",
      backgroundColor: "rgb(240 245 252 / 50%)",
      alignItems: "center",
      justifyContent: "center"
    }

    const reset_password_modal = {
      visibility: "hidden",
      height: '100%',
      width: '100%',
      position: 'fixed',
      overflow: 'auto',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px'
    }

    const message = {
      fontFamily: "Source Sans Pro",
      fontStyle: "normal",
      fontWeight: "400",
      margin: "auto",
      width: "50%",
      fontSize: "25px",
      lineHeight: "31px",
      color: "#FFFFFF",
      textAlign: "center",
    }

    const passwordreset_divider = {
      width: "90%",
      marginTop: "0",
      marginBottom: "10%",
      border: "0",
      borderBottom: "5px solid #FFFFFF",
      borderRadius: "3px",
      padding: "0",
      display: "block"
    }

    return (
        <div className="reset_password_modal_canvas" id="reset_password_modal_canvas" style={reset_password_modal}>
          <div className="reset_password_modal" style={background_modal}>
            <div className="reset_password_card" style={passwordResetCard}>
              <h1 style={password_reset_title}>Password Reset</h1>
              <hr className="passwordreset_divider" style={passwordreset_divider}/>
              <div style={message} className="body_text">
                A temporary password has been sent to your Slack. Please sign in with the temporary password and configure a new password
              </div>
              <div className="hauscr_logo_2">
                <img src="/hauscr_logo_2.png" style={imageAdjust}></img>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default PasswordResetCard