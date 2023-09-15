import React from "react";

import web from "../Images/HomeImage.svg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/about"
                btname="Get Started"
            />

        </>
    );
};
export default Home;