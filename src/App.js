import React from "react";
import GeneralInfo from "./components/generalInfo";
import EducationExp from "./components/educationExp";
import WorkExp from "./components/workExp";
import "./css/app.css";

const App = () => {
    return (
        <div>
            <header>
                <h1>CV App</h1>
            </header>
            <form className="cvEditForm">
                <GeneralInfo />
                <EducationExp />
                <WorkExp />
            </form>
            <footer>Copyright @ 2022 Bizarf</footer>
        </div>
    );
};

export default App;
