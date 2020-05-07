import React from "react";
import Option from "./Option";

const Options = (props) => (
    <React.Fragment>
        <button
            onClick={props.handleRemoveOptions}
            disabled={!props.hasOptions}
        >
            Remove All
            </button>
        {props.options.length === 0 && <p>Please add some items to your list to get started!</p>}
        <ul>
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleRemoveOneOption={props.handleRemoveOneOption}
                />
            ))}
        </ul>
    </React.Fragment>
);

export default Options;