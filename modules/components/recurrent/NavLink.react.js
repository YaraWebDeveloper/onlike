/**
 * Copyright (c) 2017, Lifemood, Inc.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Lifemood, Inc
 */

/*Import Dependencies*/
import React from 'react';
import {Link} from 'react-router';

/*Dependencies*/
export default React.createClass({
    _movetoTop: function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    },
    render: function() {
        return <Link {...this.props} activeClassName="active" onClick={this._movetoTop}/>
    }
});
