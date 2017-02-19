/*Dependencies*/
import React from 'react';
import Reflux from 'reflux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/*Import Baner*/
import Banner from './Banner.react.js'
import Separator from './Separator.react'
/*Module*/
class Home extends React.Component {

    /**
     * Constructor
     */
    constructor(props) {
        //constructor
        super(props);

    }

    /*
     * Render
     */
    render() {
        return (
            <div>
                <Banner/>
                <Separator title="-Noticias-" classsx="blue" id="news-id"/>
              
            </div>

        );
    }

}

export default Home;
