import React from "react";

const Action = (props) => (
    <button className="big-button" onClick={props.handleChooseOption} disabled={!props.hasOptions}>
        Decide for me
    </button>
);

export default Action;