import React from "react";
import Option from "./Option";

const Options = (props) => (
    <>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleRemoveOptions}
                disabled={!props.hasOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add some options to get started!</p>}
        {props.options.map((option, index) => (
            <Option
                key={option}
                optionText={option}
                count={index + 1}
                handleRemoveOneOption={props.handleRemoveOneOption}
            />
        ))}
    </>
);

export default Options;