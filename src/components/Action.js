import React from "react";

const Action = (props) => (
    <React.Fragment>
        <button className="big-button" onClick={props.handleChooseOption} disabled={!props.hasOptions}>
            What Should I Do?
        </button>
    </React.Fragment>
);

export default Action;