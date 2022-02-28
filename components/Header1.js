import React, { useState } from "react";
import styles from "../styles/Home.module.css"
import Movietile from "./Movietile";
import SearchMovie from "./SearchMovie";
import MovieDetails from "./MovieDetails";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { filterbygenres } from "../store/movies";
import Link  from "next/Link";
import { useRouter } from 'next/router'
import { connect } from "react-redux"
import { useDispatch } from "react-redux";

const Header1 = (props) => {

    const { query } = useRouter();
    const [MovieSelect, SetMovieSelect] = useState({});
    const [flag, setflag] = useState(false);
    var movieList = props.movies;

    const listClasses14 = ["row",styles.moviediv].join(" ")

    const [value,setValue]=useState('Release Date');
    
    const handleSelect=(e)=> {
        setValue(e)
        if(e === "Release Date")
            e="releasedate"
        //navigate(`?sortBy=${e}`);
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
           
            <div className={styles.rectangle9}></div> 
            <Link href="/search/?all" >
                <a className={styles.all} onClick={() => dispatch(filterbygenres(" ",value))}>ALL</a>       
            </Link>
            <Link href="/search/?genre=documentary"  >
                <a className={styles.Documentary} onClick={() => dispatch(filterbygenres("documentary",value))}>DOCUMENTARY</a>       
            </Link>
            <Link  href="/search/?genre=comedy">
                <a className={styles.Comedy}  onClick={() => dispatch(filterbygenres("comedy",value))}>COMEDY</a>
            </Link>
            <Link  href="/search/?genre=horror">
                <a className={styles.Horror} onClick={() => dispatch(filterbygenres("horror",value))}>HORROR</a> 
            </Link>
            <Link  href="/search/?genre=crime">
                <a className={styles.Crime} onClick={() => dispatch(filterbygenres("crime",value))}>CRIME</a>
            </Link>
            
            <label className={styles.moviesfound}>39 movies found</label>  
            <label className={styles.Sortby}>Sort by</label>

            <DropdownButton id="Iddropdown" title={value} variant="secondary"
                            className={styles.Releasedate}  onSelect={handleSelect}>
               <Dropdown.Item eventKey="Release Date">Release Date</Dropdown.Item> 
                <Dropdown.Item eventKey="Ratings">Ratings</Dropdown.Item>
            </DropdownButton>

            <div className={listClasses14} onClick={flagHandler}>
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
const mapStateToProps = state => {
    return { moviesList : state.list }
   }
   
   const mapDispatchToProps = {
    filterbygenres
   }
  
export default connect(mapStateToProps, mapDispatchToProps)(Header1)