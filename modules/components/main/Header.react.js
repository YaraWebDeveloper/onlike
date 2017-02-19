/*Dependencies*/
import React from 'react';

//Dependencies

/* Class */
class Header extends React.Component {
    /*Contrs*/
    constructor(props) {
        super(props);
    }

    /*render*/
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">
                                    <img src="https://onlike-client-dwpxlotdgm.now.sh/src/img/logo-white.png"/>
                                </a>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active">
                                        <a href="#">¿Quienes somos?</a>
                                    </li>
                                    <li>
                                        <a href="#">Acerca de</a>
                                    </li>
                                    <li>
                                        <a href="#">Contácto</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

/*Exports*/
export default Header;
