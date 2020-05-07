import React from "react";

const Action = (props) => (
    <React.Fragment>
        <button
            onClick={props.handleChooseOption}
            disabled={!props.hasOptions}
        >
            What should I do?
            </button>
    </React.Fragment>
);

export default Action;