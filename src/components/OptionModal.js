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
        contentLabel="You should do this task"
        onRequestClose={props.handleClearSelectedOption}
        appElement={app}
        closeTimeoutMS={175}
    >
        <h1 className='modal__header'>You should do this task:</h1>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
);

export default OptionModal;