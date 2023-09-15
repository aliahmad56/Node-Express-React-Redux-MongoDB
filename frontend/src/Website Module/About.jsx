import React from "react";
import web from "../Images/HomeImage.svg";
import Common from "./Common";

const About=()=>{
    return(
<>
<Common 
name="Welcome to About Us Page"
imgsrc={web}
visit="/contact"
btname="Contact Now "
/>

</>
    );
};

export default About;