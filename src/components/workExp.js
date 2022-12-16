import React, { useState } from "react";

const WorkExp = () => {
    const [workInfo, setWorkInfo] = useState(() => {
        const savedCompanyName = localStorage.getItem("companyName");
        const savedPositionTitle = localStorage.getItem("positionTitle");
        const savedJobDescription = localStorage.getItem("jobDescription");
        const savedJobDates = localStorage.getItem("jobDates");

        return {
            companyName: savedCompanyName || "",
            positionTitle: savedPositionTitle || "",
            jobDescription: savedJobDescription || "",
            jobDates: savedJobDates || "",
            class: "edit",
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkInfo({ ...workInfo, [name]: value });
    };

    const editWorkHistory = (e) => {
        e.preventDefault();
        const editWorkBtn = document.querySelector(".editWorkBtn");
        const saveWorkBtn = document.querySelector(".saveWorkBtn");
        editWorkBtn.style.display = "none";
        saveWorkBtn.style.display = "inline-block";
        setWorkInfo({ ...workInfo, class: "edit" });
    };

    const saveWorkHistory = (e) => {
        e.preventDefault();
        localStorage.setItem("companyName", workInfo.companyName);
        localStorage.setItem("positionTitle", workInfo.positionTitle);
        localStorage.setItem("jobDescription", workInfo.jobDescription);
        localStorage.setItem("jobDates", workInfo.jobDates);
        const editWorkBtn = document.querySelector(".editWorkBtn");
        const saveWorkBtn = document.querySelector(".saveWorkBtn");
        editWorkBtn.style.display = "inline-block";
        saveWorkBtn.style.display = "none";
        setWorkInfo({ ...workInfo, class: "editDisabled" });
    };

    return (
        <section>
            <h3>Employment History:</h3>
            <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Company Name"
                onChange={handleChange}
                className={workInfo.class}
                value={workInfo.companyName}
            />
            <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                placeholder="Position Title"
                onChange={handleChange}
                className={workInfo.class}
                value={workInfo.positionTitle}
            />
            {/* <input
                type="text"
                name="jobDescription"
                id="jobDescription"
                placeholder="Job Description"
                onChange={handleChange}
                className={workInfo.class}
                value={workInfo.jobDescription}
            /> */}
            <textarea
                name="jobDescription"
                id="jobDescription"
                placeholder="Job Description"
                onChange={handleChange}
                className={workInfo.class}
                value={workInfo.jobDescription}
                cols="30"
                rows="3"
            ></textarea>
            <input
                type="text"
                name="jobDates"
                id="jobDates"
                placeholder="Job Dates"
                onChange={handleChange}
                className={workInfo.class}
                value={workInfo.jobDates}
            />
            <button className="editWorkBtn" onClick={editWorkHistory}>
                Edit
            </button>
            <button className="saveWorkBtn" onClick={saveWorkHistory}>
                Save
            </button>
        </section>
    );
};

export default WorkExp;
