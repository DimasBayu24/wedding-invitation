import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (
            <div className="flex flex-row text-center text-14  Black-color" >
                <div className="background-transparent-white flex flex-col items-center justify-center" style={{ width: 100, height: 100, borderRadius: 50 }}>
                    <div  >{this.leading0(this.state.days)}</div>
                    <p>Days</p>
                </div>
                <div className="m-4" />
                <div className="background-transparent-white flex flex-col items-center justify-center" style={{ width: 100, height: 100, borderRadius: 50 }}>
                    <div >{this.leading0(this.state.hours)}</div>
                    <p>Hours</p>
                </div>
                <div className="m-4" />
                <div className="background-transparent-white flex flex-col items-center justify-center" style={{ width: 100, height: 100, borderRadius: 50 }}>
                    <div >{this.leading0(this.state.minutes)}</div>
                    <p>Mins</p>
                </div>
            </div>
        );
    }
}
export default Clock;