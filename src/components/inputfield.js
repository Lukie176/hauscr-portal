import React from 'react';
import styles from './inputfield.module.css'

class InputField extends React.Component {
  render() {
    const inputStyle = {
      background: 'transparent',
      border: 'none',
      padding: '10px',
      width: '80%'
    }  

    return  (
      <div>
        <input className={styles.placeholder} placeholder={this.props.placeholder} style={inputStyle}/>
      </div>
    )
  }
}

export default InputField