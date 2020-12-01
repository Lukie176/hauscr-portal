import React from 'react';
import styles from './inputfield.module.css'

class InputField extends React.Component {
  render() {
    const inputStyle = {
      background: 'transparent',
      border: 'none',
      padding: '10px',
      margin: '10px',
      width: '80%'
    }  
    const inputBorder = {
      margin: "10px"
    }
    return  (
      <div style={inputBorder}>
        <input className={styles.placeholder} placeholder={this.props.placeholder} style={inputStyle}/>
      </div>
    )
  }
}

export default InputField