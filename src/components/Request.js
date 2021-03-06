import React from 'react'
import styles from "./Reimbursements.module.css"
import PageContainer from "./RichEditor"

class Request extends React.Component {
  render() {
    return(
      <div className={styles.split}>
        <div className={styles.info}>
          <h4>
            Date of Expense: 
          </h4>
          <input type="date"/>
          <h4>Amount: </h4>
          <input type="number" min="1" step="any" />
          <h4>Receipt Upload:</h4>
          <input type="file" />
        </div>
        <div className={styles.descriptions}>
          <h4>Expense description: </h4>
          <PageContainer />
          <h4>How would you like to be reimbursed? </h4>
          <PageContainer />
          <h4>Check made out to/Venmo username: </h4>
          <PageContainer />
        </div>
      </div>
    )
  }
}

export default Request