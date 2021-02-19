import React from 'react';
import styles from './InputField.module.css'

class InputField extends React.Component {
  render() {
    return  (
      <div className={styles.inputBorder}>
        <input className={styles.placeholder} placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default InputField