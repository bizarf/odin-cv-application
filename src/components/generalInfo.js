import React, { Component } from "react";
// import "../css/app.css";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     name: "",
        //     email: "",
        //     phone: "",
        // };

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.saveInput = this.saveInput.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // saveInput() {
    //     const { name, email, phone } = this.state;
    //     localStorage.setItem("name", name);
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("phone", phone);
    // }

    // componentDidMount() {
    //     let name = localStorage.getItem("name");
    //     let email = localStorage.getItem("email");
    //     let phone = localStorage.getItem("phone");

    //     if (name === null) name = "";
    //     if (email === null) email = "";
    //     if (phone === null) phone = "";

    //     this.setState({ name, email, phone });
    // }

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
