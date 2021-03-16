import React from 'react'
import styles from "./Reimbursements.module.css"

class Reimbursements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      request: true 
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox"/>
        <div class={styles.split}>
          <div class={styles.info}>
            <h4>
              Date of Expense: 
            </h4>
            <input type="date"/>
            <h4>Amount: </h4>
            <input type="number" min="1" step="any" />
            <h4>Receipt Upload (this will need to be a file upload not an input):</h4>
            <input type="file" />
          </div>
          <div class={styles.descriptions}>
            <h4>Expense description: </h4>
            <h4>How would you like to be reimbursed? </h4>
            <h4>Check made out to/Venmo username: </h4>
          </div>
        </div>
        <button type="button">Submit</button>
      </div>
      
    )
  }
}

export default Reimbursements