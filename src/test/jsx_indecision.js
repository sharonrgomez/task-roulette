const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stops fullpage refresh
    const option = e.target.elements.option.value; // a list of all elements from form called "option"

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const chooseOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "You have no options"}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Add a new option" />
                <button type="submit">Submit</button>
            </form>
            <br />
            <button disabled={app.options.length === 0} onClick={chooseOption}>What Should I Do?</button>
            <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById("app");
render();