import React, { Component } from 'react';

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <h1>ERROR 409</h1>
            </div>
        )
    }
}

export default Image;