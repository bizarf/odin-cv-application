import React, { useState } from "react";

const EducationExpDynamic = () => {
    const [educationInfo, setEducationInfo] = useState([
        {
            schoolName: "",
            subjectStudied: "",
            schoolDateStart: "",
            schoolDateEnd: "",
        },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        let data = [...educationInfo];
        data[index][name] = value;
        setEducationInfo(data);
    };

    const addFields = (e) => {
        e.preventDefault();
        let newfield = {
            schoolName: "",
            subjectStudied: "",
            schoolDateStart: "",
            schoolDateEnd: "",
        };
        setEducationInfo([...educationInfo, newfield]);
    };

    const deleteField = (e, index) => {
        e.preventDefault();
        const updatedArr = educationInfo;
        updatedArr.splice(index, 1);
        setEducationInfo([...updatedArr]);
    };

    return (
        <section className="educationExpSection">
            <h3>Educational Experience:</h3>
            {educationInfo.map((input, index) => {
                return (
                    <form key={index}>
                        <hr />
                        <input
                            type="text"
                            name="schoolName"
                            id="schoolName"
                            placeholder="School Name"
                            onChange={(e) => handleChange(index, e)}
                            value={input.schoolName}
                        />
                        <input
                            name="subjectStudied"
                            id="subjectStudied"
                            placeholder="Subjects Studied"
                            onChange={(e) => handleChange(index, e)}
                            value={input.subjectStudied}
                        ></input>
                        <label htmlFor="schoolDateStart">Start Date:</label>
                        <input
                            type="date"
                            name="schoolDateStart"
                            id="schoolDateStart"
                            onChange={(e) => handleChange(index, e)}
                            value={input.schoolDateStart}
                        />
                        <label htmlFor="schoolDateEnd">End Date:</label>
                        <input
                            type="date"
                            name="schoolDateEnd"
                            id="schoolDateEnd"
                            onChange={(e) => handleChange(index, e)}
                            value={input.schoolDateEnd}
                        />
                        <button onClick={(e) => deleteField(e, index)}>
                            Delete
                        </button>
                        {/* if this is the last set of fields, add an add more fields button */}
                        {index === educationInfo.length - 1 && (
                            <button onClick={addFields}>Add</button>
                        )}
                    </form>
                );
            })}
            {educationInfo.length === 0 && (
                <button onClick={addFields}>Add</button>
            )}
            <hr />
        </section>
    );
};

export default EducationExpDynamic;
