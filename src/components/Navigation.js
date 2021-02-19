import styles from './Navigation.module.css'

class Navigation extends React.Component{
    render() {
        const route = this.props.route;

        function classSelect (str) {
            return ((route === str) ? styles.selected : styles.null)
        }

        return (
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.smallMargin}>
                        <img src="logo.png" className={styles.logo}/>
                    </li>
                    <li className={styles.smallMargin}>
                        <hr className={styles.divider}></hr>
                    </li>
                    <li className={classSelect("tasks")}>
                        <a href="/tasks">MY ASSIGNMENTS</a>
                    </li>
                    <li className={classSelect("reimbursements")}>
                        <a href="/reimbursements">REIMBURSEMENTS</a>
                    </li>
                    <li className={classSelect("taskform")}>
                        <a href="#">TASK FORM</a>
                    </li>
                    <li className={classSelect("history")}>
                        <a href="#">TASK HISTORY</a>
                    </li>
                    <li className={classSelect("login")}>
                        <a href="/login">LOGIN</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Navigation;