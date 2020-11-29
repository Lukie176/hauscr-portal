import styles from './AssignmentTitle.module.css'

export default function AssignmentTitle(props) {
  return (
  		<div className={styles.border}>
        <h1 className={styles.title}>
          {props.title}
        </h1>
        </div>
        )
}