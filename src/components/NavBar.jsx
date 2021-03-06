import React from 'react';

class NavBar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light"
                    style={{
                        backgroundColor: "#FFFFFF"
                    }}>
            <a className="navbar-brand me-auto" href="#" id={"navbar-text"}
               style={{
                   fontWeight: "bold",
                   paddingLeft: "30px",
                   paddingRight: "30px",
                   color: "#242424"
               }}>CLAYED</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"
                 style={{justifyContent: "right"}}
            >
                <ul className="navbar-nav my-2 my-lg-0"
                    style={{
                        paddingRight: "30px"
                    }}
                >
                    <li className="nav-item active">
                        <a className="nav-link"
                           href="/"
                           id="navbar-text-link"
                           style={{
                               fontWeight: "bold",
                               padding: "15px",
                               fontSize: 15,
                               color: "#242424",
                           }}
                        >Home</a>
                    </li>
                    <li className="nav-item disabled">
                        <a className="nav-link disabled"
                           href="/roadmap"
                           style={{
                               fontWeight: "bold",
                               padding: "15px",
                               fontSize: 15,
                               color: "#242424"
                           }}
                        >Roadmap</a>
                    </li>
                </ul>
            </div>
        </nav>
    };
}
export default NavBar;
