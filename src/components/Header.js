import React from "react";

const Header = (props) => (
    <React.Fragment>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </React.Fragment>
);

export default Header;