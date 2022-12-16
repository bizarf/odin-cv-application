import React, { useState } from "react";

const EducationExp = () => {
    const [educationInfo, setEducationInfo] = useState(() => {
        const schoolName = localStorage.getItem("schoolName");
        const subjectStudied = localStorage.getItem("subjectStudied");
        const schoolDates = localStorage.getItem("schoolDates");

        return {
            schoolName: schoolName || "",
            subjectStudied: subjectStudied || "",
            schoolDates: schoolDates || "",
            class: "edit",
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationInfo({ ...educationInfo, [name]: value });
    };

    const saveEducationHistory = (e) => {
        e.preventDefault();
        localStorage.setItem("schoolName", educationInfo.schoolName);
        localStorage.setItem("subjectStudied", educationInfo.subjectStudied);
        localStorage.setItem("schoolDates", educationInfo.schoolDates);
        const editEducationBtn = document.querySelector(".editEducationBtn");
        const saveEducationBtn = document.querySelector(".saveEducationBtn");
        saveEducationBtn.style.display = "none";
        editEducationBtn.style.display = "inline-block";
        setEducationInfo({ ...educationInfo, class: "editDisabled" });
    };

    const editEducationHistory = (e) => {
        e.preventDefault();
        const saveEducationBtn = document.querySelector(".saveEducationBtn");
        const editEducationBtn = document.querySelector(".editEducationBtn");
        saveEducationBtn.style.display = "inline-block";
        editEducationBtn.style.display = "none";
        setEducationInfo({ ...educationInfo, class: "edit" });
    };

    return (
        <form className="educationExpSection">
            <h3>Educational Experience:</h3>
            <input
                type="text"
                name="schoolName"
                id="schoolName"
                placeholder="School Name"
                onChange={handleChange}
                className={educationInfo.class}
                value={educationInfo.schoolName}
            />
            {/* <input
                type="text"
                name="subjectStudied"
                id="subjectStudied"
                placeholder="Subjects Studied"
                onChange={handleChange}
                className={educationInfo.class}
                value={educationInfo.subjectStudied}
            /> */}
            <textarea
                name="subjectStudied"
                id="subjectStudied"
                cols="30"
                rows="3"
                placeholder="Subjects Studied"
                onChange={handleChange}
                className={educationInfo.class}
                value={educationInfo.subjectStudied}
            ></textarea>
            <input
                type="text"
                name="schoolDates"
                id="schoolDates"
                placeholder="School Dates"
                onChange={handleChange}
                className={educationInfo.class}
                value={educationInfo.schoolDates}
            />
            <button onClick={editEducationHistory} className="editEducationBtn">
                Edit
            </button>
            <button onClick={saveEducationHistory} className="saveEducationBtn">
                Save
            </button>
        </form>
    );
};

export default EducationExp;
