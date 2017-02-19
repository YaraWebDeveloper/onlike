/**
 * Copyright (c) 2017, Lifemood, Inc.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Lifemood, Inc
 */
//Global
global.UriReal = "http://192.168.0.46:3000";
global.apiURI = "http://lifemoodadmin.web/api/";
global.admURI = "http://lifemoodadmin.web/";
global.apiKEY = "wc4g40s4k08c4gs888w8gks8ccskowo4c4kw4wgg";

//Import
import React from 'react';
import Reflux from 'reflux';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Cookie from 'react-cookie';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';

/*Modules of app*/
import MasterMain from './components/main/MasterMain.react';
import Home from './components/home/Home.react';
/*import MainBlog from './components/blog/Main.react.js';
import ReadBlog from './components/blog/Read.react.js';*/


/*Render*/
render((
    <Router history={browserHistory}>
        <Route path="/" component={MasterMain}>
            <IndexRoute component={Home}/>
        </Route>

    </Router>
), document.getElementById('App'));
