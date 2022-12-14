import React, { Component } from "react";
import GeneralInfo from "./components/generalInfo";
import EducationExp from "./components/educationExp";
import WorkExp from "./components/workExp";
import "./css/app.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveGeneralInfoInput = this.saveGeneralInfoInput.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    saveGeneralInfoInput() {
        const { name, email, phone } = this.state;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
    }

    componentDidMount() {
        let name = localStorage.getItem("name");
        let email = localStorage.getItem("email");
        let phone = localStorage.getItem("phone");

        if (name === null) name = "";
        if (email === null) email = "";
        if (phone === null) phone = "";

        this.setState({ name, email, phone });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>CV App</h1>
                </header>
                <form onSubmit={this.submitCV} className="cvEditForm">
                    <GeneralInfo
                        handleInputChange={this.handleInputChange}
                        state={this.state}
                        saveGeneralInfoInput={this.saveGeneralInfoInput}
                    />
                    <EducationExp />
                    <WorkExp />
                </form>
                <footer>Copyright @ 2022 Bizarf</footer>
            </div>
        );
    }
}

export default App;
