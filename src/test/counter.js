let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const removeOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={removeOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

renderCounterApp();