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

    const [editMode, setEditMode] = useState(true);

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

    const save = (e) => {
        e.preventDefault();
        setEditMode((prevState) => !prevState);
    };

    // if (!editMode)
    //     return (
    //         <div>
    //             {educationInfo.schoolName}
    //             <button onClick={save}>edit</button>
    //         </div>
    //     );

    return (
        <section className="educationExpSection">
            <h3>Educational Experience:</h3>
            {educationInfo.map((input, index) => {
                if (editMode)
                    return (
                        <form key={index} onSubmit={save}>
                            <input
                                type="text"
                                name="schoolName"
                                id="schoolName"
                                placeholder="School Name"
                                onChange={(e) => handleChange(index, e)}
                                // className={educationInfo.class}
                                value={input.schoolName}
                            />
                            <input
                                type="text"
                                name="subjectStudied"
                                id="subjectStudied"
                                placeholder="Subjects Studied"
                                onChange={(e) => handleChange(index, e)}
                                // className={educationInfo.class}
                                value={input.subjectStudied}
                            />
                            <label htmlFor="schoolDateStart">Start Date:</label>
                            <input
                                type="date"
                                name="schoolDateStart"
                                id="schoolDateStart"
                                // placeholder="School Dates"
                                onChange={(e) => handleChange(index, e)}
                                // className={educationInfo.class}
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
                            <button
                                // onClick={editEducationHistory}
                                className="editEducationBtn"
                            >
                                Edit
                            </button>
                            <button
                                // onClick={saveEducationHistory}
                                className="saveEducationBtn"
                            >
                                Save
                            </button>
                            <button onClick={addFields}>Add</button>
                        </form>
                    );
                if (!editMode) return <div key={index}>{input.schoolName}</div>;
            })}
        </section>
    );
};

export default EducationExpDynamic;
