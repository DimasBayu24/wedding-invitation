import React, { Component } from "react";
import Clock from "./clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: "March, 13, 2021" };
    }
    render() {
        return (
            <div className="App">
                <Clock deadline={this.state.deadline} />
            </div>
        );
    }
}
export default App;
