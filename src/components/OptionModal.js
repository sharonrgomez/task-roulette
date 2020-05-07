import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (      // can use implicit return, don't need to explicitly say { return (<div></div>) }
    <Modal
        isOpen={!!props.selectedOption}         // !! converts value to boolean
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h1>Selected Option</h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Close window</button>
    </Modal>
);

export default OptionModal;