import React from 'react';

/*class*/
class Player extends React.Component {
    /**/
    constructor(props) {
        super(props);

        this.state = {
            'state': 1
        };
    }

    /*component*/
    componentDidMount() {}

    /*Usign the function*/
    _togglePlay() {
        var _player = document.getElementById('main-player');

        if (_player.paused) {
            _player.play();
            this.setState({state: 1});
        } else {
            _player.pause();
            this.setState({state: 0});
        }
    }

    /*RENDER*/
    render() {
        var _button = (
            <i className="fa fa-play"></i>
        );
        var classFx = 'play';

        if (this.state.state == 1) {
            var _button = (
                <i className="fa fa-pause"></i>
            )
            var classFx = 'pause';
        }
        return (
            <div className="re-play-prod">
                <div className="container-play">
                    <div className="on-air">
                        <div className="item-port">
                            <img src="http://192.168.0.3:3000/src/img/caratula/caratula.png"/>
                        </div>
                        <div className="text-player">
                            <div className="title">Estás escuchando</div>
                            <div className="text-name">El sonido de la noche</div>
                            <div className="author">7:30pm a 10:00pm</div>
                        </div>
                        <div className={"play_botton " + classFx} onClick={this._togglePlay.bind(this)}>
                            {_button}
                        </div>
                    </div>

                    <audio autoPlay id="main-player">
                        <source src="http://giss.tv:8000/Radiorandm.mp3" type="audio/mpeg"/>
                    </audio>

                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}

//Exports+
export default Player;
