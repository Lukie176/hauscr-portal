import 'bootstrap/dist/css/bootstrap.min.css';
class Navigation extends React.Component{
    render() {
        const listStyle = {
            background: "#AE3646",
            width:'313.26 !important', 
            height:'898'
        };
        const highlighted = {
            background: "#FFFFFF"
        };

        const logo = {
            height: '35%',
            width: '35%',
            margin: 'auto',
            textAlign: 'center',
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            paddingTop: '25px'
        };

        const text = {
            fontFamily: 'Bebas Neue',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '34.1734px',
            lineHeight: '41px',
            textAlign: 'center',
            color: '#AE3646'
        }

        const text1 = {
            fontFamily: 'Bebas Neue',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '34.1734px',
            lineHeight: '41px',
            textAlign: 'center',
            color: '#FFFFFF'
        }
        
        return (
            <div class="container" >
                <ul className="nav flex-column" style={listStyle}>
                    <li className="nav-item">
                        <img src="/logo.png" style={logo} className="center"/>
                    </li>
                    <li className="nav-item">
                        <hr style={{backgroundColor: "#FFFFFF"}}></hr>
                    </li>
                    <li className="nav-item" style={highlighted}>
                        <a className="nav-link" href="#" style={text}>MY ASSIGNMENTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={text1}>REIMBURSEMENTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={text1}>TASK FORM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={text1}>TASK HISTORY</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Navigation;