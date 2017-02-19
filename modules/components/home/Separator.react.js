import React from 'react';

/*class*/
class Separator extends React.Component {
    constructor(props) {
        super(props);
    }

    /*render*/
    render() {
        return (
            <div className={"separator-animated " + this.props.classsx} id={this.props.conId}>
                <div className="container">
                    <div className="text-separator">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}


export default Separator;
