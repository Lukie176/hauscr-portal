import React from 'react'
import styles from "./Reimbursements.module.css"

class History extends React.Component {

  constructor(props) {
    super(props)
    this.test_data = [
      {date: "11/19/2020", amount: "$5.00", description: "Coffee", method: "Venmo", complete: false},
      {date: "11/15/2020", amount: "$5.00", description: "Boba", method: "Check", complete: true},
      {date: "11/20/2020", amount: "$5.00", description: "Coffee", method: "Venmo", complete: false},
      {date: "11/10/2020", amount: "$5.00", description: "Boba", method: "Check", complete: true}
    ]
  }

  render() {
    return (
      <div className={styles.ttable}>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th className={styles.theader} key={0}>Date</th>
                <th className={styles.theader} key={1}>Amount</th>
                <th className={styles.theader} key={2}>Description</th>
                <th className={styles.theader} key={3}>Method</th>
                <th className={styles.theader} key={4}>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                this.test_data.map((data, index) => (
                  <tr key={index} className={!data.complete ? "" : styles.muted}>
                    <td>{data.date}</td>
                    <td>{data.amount}</td>
                    <td>{data.description}</td>
                    <td>{data.method}</td>
                    <td className={styles.flexit}>
                      <div
                        className={styles.status}
                        style={
                          data.complete
                            ? {
                                color: "rgba(0, 0, 0, 0.8)",
                                background: "#50D34D",
                                opacity: "0.7",
                              }
                            : {}
                        }
                        onClick={() => console.log("clicked")}
                      >
                        <p style={{margin: "auto"}}>{data.complete ? "Complete" : "Pending..."}</p>
                      </div>  
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default History