import React, { useEffect } from "react";
import styles from "../styles/Home.module.css"
import ErrorBoundary from "./ErrorBoundary";
import Header1 from "./Header1";


function Homepage (props) {
        return(
            <div className={styles.Header}>
                <ErrorBoundary>
                 <Header1 movies={props.movies.moviesList}/>
                </ErrorBoundary>
            </div>
        );
}
   
export default Homepage;
