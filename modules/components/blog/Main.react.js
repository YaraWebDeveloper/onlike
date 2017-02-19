/*Dependendencies*/
import React from 'react';
import Reflux from 'reflux';
import Is from 'is_js';
import NavLink from '../recurrent/NavLink.react';

/*Files*/
import BlogStore from '../../stores/blog/BlogStore';
import BlogHActions from '../../actions/blog/BlogHActions';
import CardBlog from './CardBlog.react.js';

/*Class*/
class Main extends Reflux.Component {
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
        var $current_page = (Is.not.undefined(this.props.location.query.page))
            ? this.props.location.query.page
            : 1;

        var $search = (Is.not.undefined(this.props.location.query.search))
            ? this.props.location.query.search
            : false;

        var slug = this.props.params.slugCategory;

        BlogHActions.fecthBlogList($current_page, slug, $search);

        BlogHActions.fecthCateg();
    }

    _nodeCards() {
        var _nodeCards = this.state.data.map((info, i) => {
            return (<CardBlog key={i} info={info} url={this.state.url}/>);
        }, this);

        return _nodeCards;
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

    _getPag() {
        var maxPages = this.state.pages;
        var $current_page = (Is.not.undefined(this.props.location.query.page))
            ? this.props.location.query.page
            : 1;
        var $valorPaginasMostrar = 4;
        var $valorRInical = $current_page - $valorPaginasMostrar;
        var $valorRFinal = $current_page + $valorPaginasMostrar;

        var $valorPPrevious = (($current_page - ($valorPaginasMostrar + 1)) <= 0)
            ? 1
            : $current_page - ($valorPaginasMostrar + 1);
        var $valorPNext = (($current_page + ($valorPaginasMostrar + 1)) > maxPages)
            ? maxPages
            : $current_page + ($valorPaginasMostrar + 1);

        var _prev;
        var _first;
        var _last;
        var _next;
        var _data;

        if ($current_page != 0 && $current_page != 1) {
            _prev = (
                <li>
                    <a href={global.BLOG}>
                        <span aria-hidden="true">
                            &laquo;&laquo;
                        </span>
                    </a>
                </li>

            );

            var _linkF = global.BLOG + "?page=" + $valorPPrevious;
            _first = (
                <li>
                    <a href={_linkF} aria-label="First">
                        <span aria-hidden="true">
                            &laquo;
                        </span>
                    </a>
                </li>
            );
        }

        if ($current_page != maxPages) {
            var _linkN = global.BLOG + "?page=" + $valorPNext;

            _next = (
                <li>
                    <a href={_linkN} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            );
            var _linkL = global.BLOG + "?page=" + maxPages;
            _last = (
                <li>
                    <a href={_linkL} aria-label="Last">
                        <span aria-hidden="true">&raquo;&raquo;</span>
                    </a>
                </li>
            );
        }

        var _li = [];
        for (var i = 1; i <= maxPages; i++) {
            if (i >= $valorRInical && i <= $valorRFinal) {

                var $classFX = '';
                if (($current_page == i)) {
                    $classFX = 'active';
                } else {
                    if (($current_page == 0) && (i == 1)) {
                        $classFX = 'active';
                    }
                }
                var _linkLIS = global.BLOG + "?page=" + i;

                _li.push(
                    <li className={$classFX} key={i}>
                        <a href={_linkLIS}>{i}</a>
                    </li>
                )
            }
        }

        return (
            <div className="clearfix">
                <nav aria-label="Page navigation">
                    <ul className="pagination blog-pagination">

                        {_prev}
                        {_first}
                        {_li}
                        {_next}
                        {_last}
                    </ul>
                </nav>
            </div>
        );
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

        return (
            <section className="blog">
                <div className="container">
                    <div className="col-md-8 blog-list">
                        <h3>
                            Blog - {TitleCat}
                            {Seacrh}
                        </h3>
                        {this._nodeCards()}
                        {_res}
                        {/*Navbars*/}
                        {this._getPag()}
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

export default Main;
