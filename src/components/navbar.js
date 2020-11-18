class Navigation extends React.Component{
    render() {
        const containerStyle = {
            position: "absolute",
            background: "#AE3646",
            left: 0,
            width: "313px",
        }

        const listStyle = {
            position: "absolute",
            top: "0px"
            /*background: "#AE3646",
            width:'313px !important', 
            height:'898'*/
        };
        const highlighted = {
            background: "#FFFFFF"
        };

        const logo = {
            width: '80%',
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
            color: '#AE3646'
        }

        const text1 = {
            fontFamily: 'Bebas Neue',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '34.1734px',
            lineHeight: '41px',
            color: '#FFFFFF'
        }
        
        return (
            <div className="container" style={containerStyle}>
                <ul className="nav flex-column" style={listStyle}>
                    <li className="nav-item">
                        <img src="logo.png" style={logo} className="center"/>
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