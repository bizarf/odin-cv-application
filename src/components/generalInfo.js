import React, { useState, useEffect } from "react";

const GeneralInfo = () => {
    const [generalInfo, setGeneralInfo] = useState(() => {
        const savedName = localStorage.getItem("name");
        const savedEmail = localStorage.getItem("email");
        const savedPhone = localStorage.getItem("phone");

        return {
            name: savedName || "",
            email: savedEmail || "",
            phone: savedPhone || "",
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value });
    };

    useEffect(() => {
        localStorage.setItem("name", generalInfo.name);
        localStorage.setItem("email", generalInfo.email);
        localStorage.setItem("phone", generalInfo.phone);
    });

    return (
        <section>
            <h3>General Information:</h3>
            <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="Name"
                value={generalInfo.name}
                required
            />
            <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Email"
                value={generalInfo.email}
            />
            <input
                type="tel"
                name="phone"
                id="phone"
                onChange={handleChange}
                placeholder="Telephone"
                value={generalInfo.phone}
            />
        </section>
    );
};

export default GeneralInfo;
