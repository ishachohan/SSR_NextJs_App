import React from "react";
import styles from "../styles/Home.module.css"
import PropTypes from 'prop-types';

function Movietile(props) {

    const listClasses = ["row", styles.movietilestyle ].join(" ")
    const listclasses1 =[styles.rectangle8, "float-right" ].join(" ")
    return (

        <div className={styles.movietiles} onClick={ event => props.handleChange(event,props.movie)}>            
           <React.Fragment key={props.movie.id}>
                <div className={listClasses} >
                    <img src={props.movie.poster_path} alt="movie info" />
                    <div className="row">
                        <h3 className="col-md-auto">{props.movie.title}</h3>
                        <div className="col">
                            <div className={listclasses1}>
                                <p>{props.movie.release_date}</p>
                            </div>
                        </div>              
                    </div>
                    <p>{props.movie.genres.join('/')}</p>
                </div>
            </React.Fragment>
                
        </div>
    )
}
export default Movietile

Movietile.propTypes = {
    datas: PropTypes.shape({
      movie: PropTypes.string,
      id: PropTypes.number,
      genres: PropTypes.array,
      release_date: PropTypes.string
    })
  }
  