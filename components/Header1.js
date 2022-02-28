import React, { useState } from "react";
import "../styles/Home.module.css"
import Movietile from "./Movietile";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { filterbygenres } from "../store/movies";
import { useDispatch } from "react-redux";
import { Link  } from "next/Link";
import { useRouter } from 'next/router'

const Header1 = (props) => {
    let navigate = useRouter ();
    const [MovieSelect, SetMovieSelect] = useState({});
    const [flag, setflag] = useState(false);
    var movieList = props.movies;

    const [value,setValue]=useState('Release Date');
    
    const handleSelect=(e)=> {
        setValue(e)
        if(e === "Release Date")
            e="releasedate"
        navigate(`?sortBy=${e}`);
      }

    const dispatch = useDispatch();
    const handleChange = (event, movie) => {       
        let newMovies = { ...MovieSelect };
        newMovies = movie;
        console.log(newMovies);
        SetMovieSelect(newMovies); 
        //navigate(`?movie=${newMovies.id}`);      
      };

    const flagHandler = () => {
        setflag(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <div>
            {flag === false && <SearchMovie/>}
            {flag === true && <MovieDetails movie={MovieSelect}/> }
           
            <div className="rectangle9"></div> 
            <Link className="all" to="?genre=all" onClick={() => dispatch(filterbygenres("",value))}>ALL</Link>
            <Link className="Documentary" to="?genre=documentary" onClick={() => dispatch(filterbygenres("documentary",value))}>DOCUMENTARY</Link>
            <Link className="Comedy" to="?genre=comedy" onClick={() => dispatch(filterbygenres("comedy",value))}>COMEDY</Link>
            <Link className="Horror" to="?genre=horror" onClick={() => dispatch(filterbygenres("horror",value))}>HORROR</Link>
            <Link className="Crime"to="?genre=crime" onClick={() => dispatch(filterbygenres("crime",value))}>CRIME</Link>
            
            <label className="moviesfound">39 movies found</label>  
            <label className="Sortby">Sort by</label>

            <DropdownButton id="Iddropdown" title={value} variant="secondary"
                            className="Releasedate"  onSelect={handleSelect}>
               
               <Dropdown.Item eventKey="Release Date">Release Date</Dropdown.Item> 
               
                <Dropdown.Item eventKey="Ratings">Ratings</Dropdown.Item>
            </DropdownButton>

            <div className="row moviediv" onClick={flagHandler}>
                    {movieList?.length ? (
                        movieList.map((movie) => (
                        <Movietile
                        key={movie.id}
                        movie={movie} 
                        handleChange={handleChange}       
                        />
                        ))
                        ) : (
                            <span/>
                    )}
            </div>
        </div>

    )   
}
export default Header1