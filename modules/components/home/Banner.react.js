import React from 'react';

/*class*/
class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'info': [
                {
                    'gal_img': 'https://onlike-client-dwpxlotdgm.now.sh/src/img/banners/banner_1.jpg'
                }, {
                    'gal_img': 'https://onlike-client-dwpxlotdgm.now.sh/src/img/banners/banner_2.jpg'
                }
            ]
        };
    }

    /*render*/
    render() {
        return (
            <div id="carousel-example-generic" className="carousel slide carousel-init-home" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <ItemBan classsx="active" info={this.state.info[0]}/>
                    <ItemBan classsx="" info={this.state.info[1]}/>
                </div>

                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

/*Classname*/
class ItemBan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var info = this.props.info;
        var ClassXS = "item " + this.props.classsx;
        var url = 'url(' + info.gal_img + ')';
        return (
            <div className={ClassXS} style={{
                backgroundImage: url
            }}>
                <img src={info.gal_img} alt="..."/>
                <div className="carousel-caption right">
                    <h3 className="text-one" data-animation="animated bounceInLeft">-Shape of You:</h3>
                    <h2 className="text-two" data-animation="animated bounceInLeft">El nuevo videoclip<br/>
                        de Ed Sheran</h2>
                    <span className="text-three" data-animation="animated bounceInLeft">
                        Rompe visitas en youtube
                    </span>
                    <div className="clearfix"></div>
                    <div className="btn btn-success col-md-4 col-xs-12 col-sm-4" data-animation="animated bounceInLeft">
                        Leer Más
                    </div>
                </div>
            </div>
        );
    }
}

/*Banner*/
export default Banner;
