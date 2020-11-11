import React from 'react';
//this cannot be rendered inside another component, will mess up all the styling
class PasswordResetCard extends React.Component {
  render() {
    const passwordReset = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: '-50px',
      marginLeft: '-100px',
      //transform: 'translate(-30%, -30%)'
    }

    return (
        <div>
          <div></div>
          <div className="body_text" style={passwordReset}>
            A temporary password has been sent to your Slack. Please sign in with the temporary password and configure a new password
          </div>
          <div className="hauscr_logo_2">
            
          </div>
        </div>
      )
  }
}

export default PasswordResetCard