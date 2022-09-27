import React from "react";
import { Link } from "react-router-dom";
import styles from "./styleLandingPage.module.css"

const LandingPage = ()=>{

    console.log(styles)

    return <div className={styles.background}>
        { <Link className={styles.link} to={'/Home'}></Link> }
    
        

    </div>
}

export default LandingPage;