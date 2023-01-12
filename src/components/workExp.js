import React, { useState } from "react";

const WorkExp = () => {
    const [workInfo, setWorkInfo] = useState([
        {
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            jobDateStart: "",
            jobDateEnd: "",
        },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        let data = [...workInfo];
        data[index][name] = value;
        setWorkInfo(data);
    };

    const addFields = (e) => {
        e.preventDefault();
        let newfield = {
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            jobDateStart: "",
            jobDateEnd: "",
        };
        setWorkInfo([...workInfo, newfield]);
    };

    const deleteField = (e, index) => {
        e.preventDefault();
        const updatedArr = workInfo;
        updatedArr.splice(index, 1);
        setWorkInfo([...updatedArr]);
    };

    return (
        <section>
            <h3>Employment History:</h3>
            {workInfo.map((input, index) => {
                return (
                    <form key={index}>
                        <hr />
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            placeholder="Company Name"
                            onChange={(e) => handleChange(index, e)}
                            value={input.companyName}
                        />
                        <input
                            type="text"
                            name="positionTitle"
                            id="positionTitle"
                            placeholder="Position Title"
                            onChange={(e) => handleChange(index, e)}
                            value={input.positionTitle}
                        />
                        <input
                            type="text"
                            name="jobDescription"
                            id="jobDescription"
                            placeholder="Job Description"
                            onChange={(e) => handleChange(index, e)}
                            value={input.jobDescription}
                        />
                        <input
                            type="date"
                            name="jobDateStart"
                            id="jobDateStart"
                            onChange={(e) => handleChange(index, e)}
                            value={input.jobDateStart}
                        />
                        <input
                            type="date"
                            name="jobDateEnd"
                            id="jobDateEnd"
                            onChange={(e) => handleChange(index, e)}
                            value={input.jobDateEnd}
                        />
                        <button onClick={(e) => deleteField(e, index)}>
                            Delete
                        </button>
                        {index === workInfo.length - 1 && (
                            <button onClick={addFields}>Add</button>
                        )}
                    </form>
                );
            })}
            {workInfo.length === 0 && <button onClick={addFields}>Add</button>}
            <hr />
        </section>
    );
};

export default WorkExp;
