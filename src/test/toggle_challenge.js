const changeBtn = () => {
    showBtn = !showBtn;
    render();
};

let showBtn = true;

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeBtn}>{showBtn ? "Show details" : "Hide details"}</button>
            {!showBtn && <p>Here's some extra info you should know!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
render();