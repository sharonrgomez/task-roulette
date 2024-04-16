import React from "react";
import Option from "./Option";

const Options = (props) => (
    <>
        <div className="widget-header">
            <h3 className="widget-header__title">Your list</h3>
            {props.hasOptions && (
                <button
                    className="button button--link"
                    onClick={props.handleRemoveOptions}
                    disabled={!props.hasOptions}
                >
                    Remove all
                </button>
            )}
        </div>
        {props.options.length === 0 && <p className="widget__message">There are no tasks</p>}
        {props.options.map((option, index) => (
            <Option
                key={option}
                optionText={option}
                handleRemoveOneOption={props.handleRemoveOneOption}
            />
        ))}
    </>
);

export default Options;