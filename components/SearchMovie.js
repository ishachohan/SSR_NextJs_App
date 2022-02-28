import React,{useState , useEffect } from "react";
import AddMovie from "./AddMovie";
import DeleteMovie from "./DeleteMovie"
import EditMovie from "./EditMovie"
import { useDispatch, useSelector } from "react-redux";
import Header1 from "./Header1";
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import {searchMovies, getMoviebyId, filterbygenres} from "../store/movies"
import MovieDetails from "./MovieDetails";

function SearchMovie() 
{
    const { query } = useRouter();

    const [value,setValue]=useState("");
    const [flag, setflag] = useState(false);

    const [data, setData] = useState([]);
    const [conditionCounter, setConditionCounter] = useState(0);
    

    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);

   
    useEffect(() => {

        if(query.movie)
        {
            setConditionCounter(c=>c+1);
            console.log(query.movie)
            dispatch(getMoviebyId(query.movie));
            console.log(moviesList)
        }
        else
        {
            console.log(conditionCounter)
            setConditionCounter(0);
        }
    }, [conditionCounter]); 
    if(conditionCounter)
    {
        return(
            <MovieDetails key={conditionCounter} movie={moviesList}/>
        )
    }

    const flagHandler = () => {  
        setflag(true); 
        if(value)
        {
            console.log("before dispatch")
            dispatch(searchMovies(value));
            return;
        } 
        if(query.genre)
        {
            dispatch(filterbygenres(query.genre,"releasedate"))
            console.log(moviesList.data)
        }
        else if(query.sortBy)
        {
            dispatch(filterbygenres("",query.sortBy))
            console.log(moviesList.data)   
        }

        else if(query.search === undefined)
        {
            dispatch(searchMovies(" "));
        }
        else if(query.search)
        {
            console.log("search inside")
            dispatch(searchMovies(query.search)); 
        }
      
    }

    if(flag === true)
    {
        return(
            <Header1 movies={moviesList.data}/>
        );
    }
    else{
        return(
            <div className={styles.rectangle1}>
                    <input type="image" className={styles.bitmapimageback} alt="Image"/> 
                    <AddMovie/>
                    <EditMovie/>
                    <DeleteMovie/>
                    <div>
                        <h1 className= {styles.labelFindText}>FIND YOUR MOVIE </h1>
                        <input type="text" placeholder="What do you want to watch?" name="searchtxt" id="searchtxt"
                               className={styles.SearchInput} value = {value} onChange={e => setValue(e.target.value)}  />
                        <input type="button" className={styles.SearchBtn} value="Search" onClick={flagHandler} id="searchbtn" name="searchbtn"/>
                    </div> 
            </div> 
    
        )
    }
}

export default SearchMovie;