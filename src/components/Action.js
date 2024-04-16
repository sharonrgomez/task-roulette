import React from "react";

const Action = (props) => (
    <button className="big-button" onClick={props.handleChooseOption} disabled={!props.hasOptions}>
        What should I do?
    </button>
);

export default Action;