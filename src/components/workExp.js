import React, { Component } from "react";

class WorkExp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            jobDates: "",
            class: "edit",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.editWorkHistory = this.editWorkHistory.bind(this);
        this.saveWorkHistory = this.saveWorkHistory.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    editWorkHistory(e) {
        e.preventDefault();
        const editWorkBtn = document.querySelector(".editWorkBtn");
        const saveWorkBtn = document.querySelector(".saveWorkBtn");
        editWorkBtn.style.display = "none";
        saveWorkBtn.style.display = "inline-block";
        this.setState({ class: "edit" });
    }

    saveWorkHistory(e) {
        e.preventDefault();
        const { companyName, positionTitle, jobDescription, jobDates } =
            this.state;
        localStorage.setItem("companyName", companyName);
        localStorage.setItem("positionTitle", positionTitle);
        localStorage.setItem("jobDescription", jobDescription);
        localStorage.set("jobDates", jobDates);

        const editWorkBtn = document.querySelector(".editWorkBtn");
        const saveWorkBtn = document.querySelector(".saveWorkBtn");
        editWorkBtn.style.display = "inline-block";
        saveWorkBtn.style.display = "none";
        this.setState({ class: "editDisabled" });
    }

    componentDidMount() {
        let companyName = localStorage.getItem("companyName");
        let positionTitle = localStorage.getItem("positionTitle");
        let jobDescription = localStorage.getItem("jobDescription");
        let jobDates = localStorage.getItem("jobDates");

        if (companyName === null) companyName = "";
        if (positionTitle === null) positionTitle = "";
        if (jobDescription === null) jobDescription = "";
        if (jobDates === null) jobDescription = "";

        this.setState({ companyName, positionTitle, jobDescription, jobDates });
    }

    render() {
        return (
            <section>
                <h3>Employment History:</h3>
                <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company Name"
                    onClick={this.handleInputChange}
                    className={this.state.class}
                />
                <input
                    type="text"
                    name="positionTitle"
                    id="positionTitle"
                    placeholder="Position Title"
                    onClick={this.handleInputChange}
                    className={this.state.class}
                />
                <input
                    type="text"
                    name="jobDescription"
                    id="jobDescription"
                    placeholder="Job Description"
                    onClick={this.handleInputChange}
                    className={this.state.class}
                />
                <input
                    type="text"
                    name="jobDates"
                    id="jobDates"
                    placeholder="Job Dates"
                    onClick={this.handleInputChange}
                    className={this.state.class}
                />
                <button className="editWorkBtn" onClick={this.editWorkHistory}>
                    Edit
                </button>
                <button className="saveWorkBtn" onClick={this.saveWorkHistory}>
                    Save
                </button>
            </section>
        );
    }
}

export default WorkExp;
