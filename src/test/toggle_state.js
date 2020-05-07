class ToggleVisi extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <React.Fragment >
                <h1>can u see me</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Here's some extra info you should know!</p>
                    </div>
                )}
            </React.Fragment >
        );
    }
}

ReactDOM.render(<ToggleVisi />, document.getElementById("app"));