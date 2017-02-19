/**
 * Copyright (c) 2017, Lifemood, Inc.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Lifemood, Inc
 */

/*Import dependencies*/
import NavLink from '../recurrent/NavLink.react';
import React from 'react';
import Reflux from 'reflux';
import Cookie from 'react-cookie';

/* Header */
import Header from './Header.react';
import Footer from './Footer.react';
import Player from '../player/Player.react';

/*Class*/
class MasterMain extends React.Component {
    /*Constructor*/
    constructor(props) {
        //Call to super
        super(props);

        //States
        this.state = {};
    }

    /*Renders*/
    render() {
        return (
            <section>
                <Player/>
                <Header/>

                <section className="main-section">
                    {this.props.children}
                </section>

                <Footer/>
            </section>
        )
    }

}

export default MasterMain;
