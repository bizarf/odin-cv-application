import React, { Component } from "react";

class EducationExp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: "",
            subjectStudied: "",
            schoolDates: "",
            class: "edit",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveEducationHistory = this.saveEducationHistory.bind(this);
        this.editEducationHistory = this.editEducationHistory.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    saveEducationHistory(e) {
        e.preventDefault();
        const { schoolName, subjectStudied, schoolDates } = this.state;
        localStorage.setItem("schoolName", schoolName);
        localStorage.setItem("subjectStudied", subjectStudied);
        localStorage.setItem("schoolDates", schoolDates);

        const editEducationBtn = document.querySelector(".editEducationBtn");
        const saveEducationBtn = document.querySelector(".saveEducationBtn");
        saveEducationBtn.style.display = "none";
        editEducationBtn.style.display = "inline-block";
        this.setState({ class: "editDisabled" });
    }

    editEducationHistory(e) {
        e.preventDefault();
        const saveEducationBtn = document.querySelector(".saveEducationBtn");
        const editEducationBtn = document.querySelector(".editEducationBtn");
        saveEducationBtn.style.display = "inline-block";
        editEducationBtn.style.display = "none";
        this.setState({ class: "edit" });
    }

    componentDidMount() {
        let schoolName = localStorage.getItem("schoolName");
        let subjectStudied = localStorage.getItem("subjectStudied");
        let schoolDates = localStorage.getItem("schoolDates");

        if (schoolName === null) schoolName = "";
        if (subjectStudied === null) subjectStudied = "";
        if (schoolDates === null) schoolDates = "";

        this.setState({ schoolName, subjectStudied, schoolDates });
    }

    render() {
        return (
            <section className="educationExpSection">
                <h3>Educational Experience:</h3>
                <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    placeholder="School Name"
                    onChange={this.handleInputChange}
                    className={this.state.class}
                />
                <input
                    type="text"
                    name="subjectStudied"
                    id="subjectStudied"
                    placeholder="Subjects Studied"
                    onChange={this.handleInputChange}
                    className={this.state.class}
                />
                <input
                    type="text"
                    name="schoolDates"
                    id="schoolDates"
                    placeholder="School Dates"
                    onChange={this.handleInputChange}
                    className={this.state.class}
                />
                <button
                    onClick={this.editEducationHistory}
                    className="editEducationBtn"
                >
                    Edit
                </button>
                <button
                    onClick={this.saveEducationHistory}
                    className="saveEducationBtn"
                >
                    Save
                </button>
            </section>
        );
    }
}

export default EducationExp;
