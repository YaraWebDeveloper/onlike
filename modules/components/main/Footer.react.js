import React from 'react';

/*class*/
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    /*Render*/
    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="col-md-8 col-sm-8 col-xs-12 c-center center-block">
                        {/*Foter*/}
                        <div className="col-md-6 col-xs-12 col-sm-4 panel-footer-s first">
                            Onlike Stereo
                            <br/>
                            contacto@onlike.fm

                            <br/>
                        </div>

                        <div className="col-md-6 col-xs-12 col-sm-4 panel-footer-s social-n">
                            <div className="itm-sn tw">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="itm-sn fb">
                                <i className="fa fa-facebook"></i>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>

                    <div className="legal-foot">
                        © 2017 por Onlike Sterero FM | Yara Web Developer, CO
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
