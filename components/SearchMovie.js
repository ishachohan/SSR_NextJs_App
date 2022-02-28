import React,{useState , useEffect} from "react";
import AddMovie from "./AddMovie";
import DeleteMovie from "./DeleteMovie"
import EditMovie from "./EditMovie"
import { useDispatch, useSelector } from "react-redux";
import {searchMovies} from '../store/movies'
import Header1 from "./Header1";
import { useParams, useSearchParams, useRouter } from "next/router"
import { filterbygenres , getMoviebyId } from "../store/movies";
import MovieDetails from "./MovieDetails";

function SearchMovie() 
{
    const router = useRouter ();
    //const params = useParams();
    const [value,setValue]=useState("");
    const [flag, setflag] = useState(false);
 
    const [data, setData] = useState([]);
    const [conditionCounter, setConditionCounter] = useState(0);

    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);

    const flagHandler = () => {  
        setflag(true);  
    }

    
    if(flag === true)
    {
        return(
            <Header1 movies={moviesList.data}/>
        );
    }
    else{
        return(
            <div className="rectangle1">
                    <input type="image" className="bitmapimageback" alt="Image"/> 
                    <AddMovie/>
                    <EditMovie/>
                    <DeleteMovie/>
                    <div>
                        <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                        <input type="text" placeholder="What do you want to watch?" name="searchtxt" id="searchtxt"
                               className="SearchInput" value = {value} onChange={e => setValue(e.target.value)}  />
                        <input type="button" className="SearchBtn" value="Search" onClick={flagHandler} id="searchbtn" name="searchbtn"/>
                    </div> 
            </div> 
    
        )
    }
}
export default SearchMovie;