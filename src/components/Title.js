import styles from './Title.module.css'

export default function Title(props) {
  return (
		<div className={styles.border}>
      <h1 className={styles.title}>
        {props.title}
      </h1>
    </div>
  )
}