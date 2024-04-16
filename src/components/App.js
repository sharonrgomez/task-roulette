import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class TaskRouletteApp extends React.Component {
    state = {
        options: [],
        selectedOption: false
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: false
        }));
    };

    handleRemoveOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleRemoveOneOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }));
    };

    handleChooseOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter a valid task"
        } else if (this.state.options.indexOf(option) > -1) {
            return "That task already exists"
        }
        this.setState((prevState) => (
            { options: prevState.options.concat(option) })
        );
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.log("Error: ", e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    render() {
        const title = "Task Roulette";
        const subtitle = "Not sure where to start on your to-do list? Simply add your tasks below and let Task Roulette decide for you."

        return (
            <> 
                <Header title={title}
                    subtitle={subtitle}
                />
                <div className="container">
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            hasOptions={this.state.options.length > 0}
                            handleRemoveOptions={this.handleRemoveOptions}
                            handleRemoveOneOption={this.handleRemoveOneOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handleChooseOption={this.handleChooseOption}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </>
        );
    }
}