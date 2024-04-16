import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => { // handleAddOption that deals with form submission
        e.preventDefault(); // stops fullpage refresh
        const option = e.target.elements.option.value.trim(); // a list of all elements from form called "option"
        const error = this.props.handleAddOption(option); // handleAddOption from parent that changes state

        this.setState(() => ({ error })); // es6 shorthand for error: error. setting value of error to the const 'error' in this func

        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form className="add-option" onSubmit={this.handleAddOption} autoComplete="off">
                    <input className="add-option__input" type="text" name="option" placeholder="Add a new task" />
                    <button className="button">Add task</button>
                </form>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            </div>
        );
    }
}