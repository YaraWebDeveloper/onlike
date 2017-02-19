/*Dependencies*/
import Reflux from 'reflux';
import BlogHActions from '../../actions/blog/BlogHActions';
import Cookie from 'react-cookie';
import Is from 'is_js';

/*Class*/
class BlogStore extends Reflux.Store {
    /*Contructor*/
    constructor() {
        super(); //Parent
        this.state = {
            code: 0,
            data: [],
            url: '',
            dataList: [],
            pages: 1,
            dataCat: []
        };
        this.listenables = BlogHActions; //Listeneables
    }

    /*On Fecth*/
    onFetchBlog() {

        $.ajax({
            url: global.apiURI + "news/viewnot",
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            headers: {
                'accept-auth': global.apiKEY
            },
            success: (response) => {

                if (Is.not.undefined(response.data)) {
                    this.setState({code: 1, data: response.data, url: response.url});
                } else {
                    this.setState({code: response.code});
                }

            }
        });
    }

    /*On Fecth*/
    onFecthBlogList($current_page, slug, search) {
        var _data = {
            page: $current_page,
            type: 1
        }
        if (Is.not.undefined(slug)) {
          _data = {
             page: $current_page,
             type: 3,
             slug: slug
         }
        }

        if(Is.not.boolean(search)){
          _data = {
             page: $current_page,
             type: 2,
             search: search
          }
        }

        $.ajax({
            url: global.apiURI + "news/notblog",
            type: 'GET',
            data: _data,
            dataType: 'json',
            crossDomain: true,
            headers: {
                'accept-auth': global.apiKEY
            },
            success: (response) => {

                if (Is.not.undefined(response.data)) {
                    this.setState({code: 1, data: response.data, url: response.url, pages: response.pages, });
                } else {
                    this.setState({code: response.code});
                }

            }
        });
    }

    onFecthCateg() {
        $.ajax({
            url: global.apiURI + "news/catblog",
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            headers: {
                'accept-auth': global.apiKEY
            },
            success: (response) => {

                if (Is.not.undefined(response.data)) {
                    this.setState({code: 1, dataCat: response.data});
                } else {
                    this.setState({code: response.code});
                }

            }
        });
    }

    onFecthNot(slug) {

        $.ajax({
            url: global.apiURI + "news/newview",
            type: 'GET',
            data: {
              slug: slug
            },
            dataType: 'json',
            crossDomain: true,
            headers: {
                'accept-auth': global.apiKEY
            },
            success: (response) => {

                if (Is.not.undefined(response.data)) {
                    this.setState({code: 1, data: response.data, url: response.url});
                } else {
                    this.setState({code: response.code});
                }

            }
        });
    }

}

export default BlogStore;
