/*Dependendencies*/
import React from 'react';
import Reflux from 'reflux';
import Is from 'is_js';
import NavLink from '../recurrent/NavLink.react';

/*Class*/
class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var _info = this.props.info;
        var _img = this.props.url + _info.not_img;
        var _stars = global.UriReal + "/src/img/blog/BLOG/estrellas.png";
        var _comme = global.UriReal + "/src/img/blog/BLOG/coment.png";
        var _share = global.UriReal + "/src/img/blog/BLOG/share.png";

        return (
            <div className="blog-item col-md-12">
                <div className="col-md-4 blog-images">
                    <a href={global.UriReal + "/blog/" + _info.not_slug}>
                        <img src={_img} alt={_info.not_titulo}/>
                    </a>
                </div>
                <div className="col-md-8">
                    <a href={global.UriReal + "/blog/" + _info.not_slug}>
                        <h4>
                            {_info.not_titulo}
                        </h4>
                    </a>
                    <p>
                        {_info.not_text}
                    </p>
                    <a href={global.UriReal + "/blog/" + _info.not_slug} className="col-md-6 col-sm-6 col-xs-12 botton-card-blog pull-right">
                        Leer más.
                    </a>
                    <div className="blog-btns">
                        <a href={global.UriReal + "/blog/" + _info.not_slug}>
                            <div className="estrellas">
                                <img src={_stars} alt=""/>
                                <div className="color-stars"></div>
                                <div className="color-bg-stars"></div>
                            </div>
                        </a>
                        <a href={global.UriReal + "/blog/" + _info.not_slug}>
                            <div className="btn1">
                                <img src={_comme} alt=""/>
                            </div>
                        </a>
                        <a href={global.UriReal + "/blog/" + _info.not_slug}>
                            <div className="btn2">
                                <img src={_share} alt=""/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
