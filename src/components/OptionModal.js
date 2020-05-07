import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (      // can use implicit return, don't need to explicitly say { return (<div></div>) }
    <Modal
        style={{
            overlay: {
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            }
        }}
        className="modal"
        isOpen={!!props.selectedOption}         // !! converts value to boolean
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        appElement={app}
        closeTimeoutMS={175}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
);

export default OptionModal;