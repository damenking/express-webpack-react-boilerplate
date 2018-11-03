import React from "react";
import ReactDOM from "react-dom";

import Main from "./pages/index";
import "./styles.scss";

const Root = () => <Main />;

ReactDOM.render(<Root />, document.getElementById("app"));

module.hot.accept();
