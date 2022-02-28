import React from "react";
import "../styles/Home.module.css"
import PropTypes from 'prop-types';

function Movietile(props) {

    return (

        <div className="movietiles" onClick={ event => props.handleChange(event,props.movie)}>            
           <React.Fragment key={props.movie.id}>
                <div className="row movietilestyle" >
                    <img src={props.movie.poster_path} alt="movie info" />
                    <div className="row">
                        <h3 className="col-md-auto">{props.movie.title}</h3>
                        <div className="col align-">
                            <div className="rectangle8 float-right">
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
  