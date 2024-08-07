import React from "react";
//import PropTypes from "prop-types";

class BasicFigure extends React.Component{
    render(){
        return(
            <figure>
                <img src={this.props.filename} alt="A cat"/>
                <figcaption>{this.props.caption}</figcaption>
            </figure>
        )
    }
};

/*
BasicFigure.propTypes ={
    filename: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
};
*/

export default BasicFigure;