import React from 'react'

class LeftLogo extends React.Component {
  render() {
    const imageAdjust = {
      maxWidth: '100%',
      height: 'auto',
      zIndex: '1000',
    }
    return (
      <div className="align_logo">
        <div className="hauscr_logo_big">
          <img src="/hauscr_logo.png" style={imageAdjust}></img>
        </div>
      </div>
    )
  }
}

export default LeftLogo