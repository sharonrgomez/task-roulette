class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this); // need to bind this to be able to pass down the function 
        this.handleChooseOption = this.handleChooseOption.bind(this);   // to other classes
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOneOption = this.handleRemoveOneOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleRemoveOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOneOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }));
    }

    handleChooseOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter a valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "That option already exists"
        }
        this.setState((prevState) => (
            { options: prevState.options.concat(option) })
        );
    }

    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer.";

        return (
            <React.Fragment> {/* replaces the need to wrap everything in a div */}
                <Header title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleChooseOption={this.handleChooseOption}
                />
                <Options
                    options={this.state.options}
                    hasOptions={this.state.options.length > 0}
                    handleRemoveOptions={this.handleRemoveOptions}
                    handleRemoveOneOption={this.handleRemoveOneOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </React.Fragment>
        );
    }
}

const Header = (props) => {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </React.Fragment>
    );
};

const Action = (props) => {
    return (
        <React.Fragment>
            <button
                onClick={props.handleChooseOption}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </React.Fragment>
    );
};

const Options = (props) => {
    return (
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
};


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleRemoveOneOption(props.optionText)
                }}
            >
                Remove</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) { // handleAddOption that deals with form submission
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
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add a new option" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));