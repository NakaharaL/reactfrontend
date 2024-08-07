import React from "react";
import BasicFigure from "./BasicFigure";

class FigureList extends React.Component {
    render() {
        return (
            <div style={{display:"flex"}}>
                <BasicFigure filename="/images/cat.jpeg" caption="A Cat" />
                <BasicFigure filename="/images/dog.jpeg" caption="A Dog" />
                <BasicFigure filename="/images/chicken.jpeg" caption="Chicken" />
            </div>
        );
    }
}

export default FigureList;