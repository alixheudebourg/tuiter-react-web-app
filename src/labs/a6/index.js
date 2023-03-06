// import { Link } from "react-router-dom";
import Nav from "../../nav.js";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import React from "react"; 


function Assignment6() {
    return (
        <div>
            {/* <Link to="/">Lab</Link> |
            <Link to="/hello">Hello</Link> | 
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav/>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>);
}
export default Assignment6;