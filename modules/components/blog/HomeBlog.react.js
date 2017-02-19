/*Dependendencies*/
import React from 'react';
import Reflux from 'reflux';
import Is from 'is_js';
import NavLink from '../recurrent/NavLink.react';

/**/
import BlogHActions from '../../actions/blog/BlogHActions';
import BlogStore from '../../stores/blog/BlogStore';
/**/
class HomeBlog extends Reflux.Component {
    /*Contructior*/
    constructor(props) {
        super(props);

        this.store = BlogStore;
    }

    componentDidMount() {
        BlogHActions.fetchBlog();
    }

    _nodeRanked() {
        var nodeRank = this.state.data.map((data, i) => {
            return (<CardBlogHome key={i} data={data} url={this.state.url}/>);
        }, this);

        return nodeRank;
    }

    render() {
        return (
            <section className="main-blog">
                <div className="container-blog container">
                    <TitleBlogHome/>

                    <div className="content-blog">
                        {this._nodeRanked()}
                        <div className="clearfix"></div>
                    </div>

                    <div className="go-blog col-md-5 col-sm-5 col-xs-12 c-center center-block">
                        <NavLink to="/blog">Ir a Blog</NavLink>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </section>

        )
    }
}
/*Card Blog*/
class CardBlogHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var info = this.props.data;
        var _img = this.props.url + info.not_img;
        return (
            <div className="card-blog col-md-6 col-xs-12 col-sm-6">
                <div className="card-content">
                    <figure className="img-card-blog col-md-4 col-sm-4 col-xs-12">
                        <a href="#"><img src={_img} alt=""/></a>
                        <div className="clearfix"></div>
                    </figure>

                    <div className="text-card-blog col-md-8 col-sm-8 col-xs-12">
                        <div className="title-card-blog">
                            {/*43 Caracterés */}
                            <a href="#">{info.not_titulo}</a>
                        </div>

                        {/*230 Caracterés*/}
                        <div className="content-card-blog">
                            {info.not_text}
                        </div>
                        <div className="clearfix"></div>

                        <a href="#" className="col-md-6 col-sm-6 col-xs-12 botton-card-blog pull-right">
                            Leer más.
                        </a>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

/*Title*/
class TitleBlogHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>
                <a className="title-blog text-center col-md-12 col-sm-12 col-xs-12">
                    Blog y Noticias de Interés
                </a>
            </h3>
        )
    }
}

export default HomeBlog;
