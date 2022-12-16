import React from "react";
import GeneralInfo from "./components/generalInfo";
import EducationExp from "./components/educationExp";
import EducationExpDynamic from "./components/educationExpDynamic";
import WorkExp from "./components/workExp";
import "./css/app.css";

const App = () => {
    return (
        <div>
            <header>
                <h1>CV App</h1>
            </header>
            <div className="cvEditForm">
                <GeneralInfo />
                <EducationExp />
                {/* <EducationExpDynamic /> */}
                <WorkExp />
            </div>
            <footer>Copyright @ 2022 Bizarf</footer>
        </div>
    );
};

export default App;
