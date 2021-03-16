import React from 'react'
import styles from "./Reimbursements.module.css"
import Request from "./Request"
import History from "./ReimbursementHistory"

class Reimbursements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      request: true 
    }
  }

  render() {
    return (
      <div className={styles.full}>
        <input onClick={() => {var k  = this.state.request; this.setState({request: !k})}}className={styles.toggle} type="checkbox"/>
        {
          this.state.request ?
          (
          <div>
            <Request /> 
            <div className={styles.submit}>
              <button className={styles.submithover} type="submit">Submit</button>
            </div>
          </div>
          )
          : <History />
        }
        
        
      </div>  
    )
  }
}

export default Reimbursements