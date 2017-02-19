/*Dependendencies*/
import React from 'react';
import Reflux from 'reflux';
import Is from 'is_js';
import NavLink from '../recurrent/NavLink.react';

/*Files*/
import BlogStore from '../../stores/blog/BlogStore';
import BlogHActions from '../../actions/blog/BlogHActions';

/*Class*/
class Read extends Reflux.Component {
    constructor(props) {
        super(props);
        var $search = (Is.not.undefined(this.props.location.query.search))
            ? this.props.location.query.search
            : '';
        this.state = {
            'valueSearch': $search
        };
        this.store = BlogStore;
        var path = this.props.location.pathname;
        global.BLOG = global.UriReal + path;

        console.log(path);
    }

    /*Component*/
    componentDidMount() {
        var slug = this.props.params.notSlug;

        BlogHActions.fecthNot(slug);

        BlogHActions.fecthCateg();
    }

    _txtSearch(e) {
        this.setState({valueSearch: e.target.value})
    }

    _getCategories() {

        var _nodeCategories = this.state.dataCat.map((data, i) => {
            var _linkCat = global.UriReal + "/blog/category/" + data.cat_not_slug;
            return (
                <li key={i}>
                    <a href={_linkCat}>{data.cat_not_nombre}</a>
                </li>
            );
        }, this);

        return _nodeCategories;

    }

    render() {
        var _category = this.props.params.slugCategory;
        var TitleCat;
        if (Is.not.undefined(_category) && Is.not.undefined(this.state.data[0])) {
            TitleCat = this.state.data[0].cat_not_nombre;
        }
        var Seacrh;
        var _seacrh = this.props.location.query.search;

        if (Is.not.undefined(_seacrh)) {
            Seacrh = _seacrh + "...";
        }
        var _res;
        if (Is.undefined(this.state.data[0])) {
            _res = (
                <div className="info-none text-center">
                    No se encontraron resultados...
                </div>
            );
        }

        var info = this.state.data;
        var url = this.state.url;

        return (
            <section className="blog-post">
                <div className="container">
                    <div className="col-md-8 blog-list">
                        <h3>
                            Blog
                        </h3>
                        <div className="blog-news">
                            <h4>
                                {info.not_titulo}
                            </h4>
                            <img src={url + "/" + info.not_img} alt={info.not_titulo}/>
                            <p dangerouslySetInnerHTML={{
                                __html: info.not_text
                            }}></p>
                        </div>
                    </div>

                    <div className="col-md-4 blog-search">
                        <h3>
                            BUSCAR
                        </h3>

                        <div className="main-search">
                            <form className="form-search" action={global.UriReal + "/blog"}>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="search" placeholder="Buscar..." aria-describedby="basic-addon2" value={this.state.valueSearch} onChange={this._txtSearch.bind(this)}/>
                                    <span className="input-group-addon" id="basic-addon2">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="clearfix"></div>

                        <div className="list-categories">
                            <div className="title-list">Categorias</div>

                            <div className="col-md-12 col-sm-12 col-xs-12 content-list">
                                <ul>
                                    <li>
                                        <a href={global.UriReal + "/blog"}>
                                            Todas
                                        </a>
                                    </li>
                                    {this._getCategories()}
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Read;
