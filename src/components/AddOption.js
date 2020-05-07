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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} autoComplete="off" >
                    <input type="text" name="option" placeholder="Add a new option" />
                    <button
                        className="button"
                    >Add Option</button>
                </form>
            </div>
        );
    }
}