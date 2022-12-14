import React, { Component } from "react";
// import "../css/app.css";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <section>
                <h3>General Information:</h3>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.props.handleInputChange}
                    onBlur={this.props.saveGeneralInfoInput}
                    placeholder="Name"
                    value={this.props.state.name}
                    required
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.props.handleInputChange}
                    onBlur={this.props.saveGeneralInfoInput}
                    placeholder="Email"
                    value={this.props.state.name}
                />
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={this.props.handleInputChange}
                    onBlur={this.props.saveGeneralInfoInput}
                    placeholder="Telephone"
                    value={this.props.state.name}
                />
            </section>
        );
    }
}

export default GeneralInfo;
