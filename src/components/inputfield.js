import React from 'react';

class InputField extends React.Component {
  render() {
    return  (
      <div>
        <input placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default InputField