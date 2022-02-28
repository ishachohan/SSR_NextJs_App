import React,  { useState , useContext, useCallback} from "react";
import styled from "styled-components";
import SearchMovie from "./SearchMovie";


const CoverImage = styled.img`
  object-fit: cover;
  width: 320px;
  height: 400px;
  left: 5px;
  top: 100px;
`;

const DetailText = styled.label`
width: 698px;
height: 292px;
left: 400px;
top: 200px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;;
`
;

const SearchIcon = styled.img`
object-fit: cover;
width: 32px;
height: 32px;
left: 900px;
top: 5px;
cursor: pointer;
`;

const MovieText = styled.label`
width: 400px;
height: 49px;
left: 470px;
top: 100px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 49px;

text-align: center;
letter-spacing: 1px;
text-transform: uppercase;

color: #FFFFFF;
`;

const Ratingstext = styled.label`
height: 24px;
left: 200px;
height: 24px;
top:100px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 1100px;
  height: 396px;
  left: 5px;
  top: 1px;
`;

const MovieTypetext = styled.label`
    width: 323px;
    height: 17px;
    left: 494px;
    top: 186px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`;

const MovieYear = styled.label`
width: 100px;
height: 29px;
left: 500px;
top: 233px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 15px;

color: #F65261;
`;

const MovieRunTime = styled.label`
width: 113px;
height: 29px;

font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 15px;

color: #F65261;
`;

function MovieDetails(props){
    const textdetails = {
        text : props.movie.overview
    };
    
    const TextdetailsContext = React.createContext(textdetails);

    const [flag, setflag] = useState(false);

    const flagHandler = useCallback(() => {
        setflag(true);
      },[]);

      const textcontext = useContext(TextdetailsContext);
      
      if(flag)
               return<SearchMovie/>
      else
            {
                return(
                <MovieContainer>

                 <div className="column" style={{textAlign:"right"}}>
                 <SearchIcon src="/search-2-32.png" alt="search button" onClick={flagHandler} />
                </div>
                <div className="row">
                    <CoverImage  src={props.movie.poster_path} alt="poster path" />
                    <div className="col-5">
                        <MovieText>{props.movie.title}</MovieText>
                        <Ratingstext style={{textAlign:"right"}}>{props.movie.vote_average}</Ratingstext>
                        <div className="col-9">
                        <MovieTypetext>{props.movie.genres}

                        </MovieTypetext>
                        </div>
                        
                        <div className="col-9">
                            <MovieYear>{props.movie.release_date}</MovieYear>
                            <MovieRunTime>{props.movie.runtime}</MovieRunTime>
                        </div>
                        <div className="col-9">
                            <DetailText>{textcontext.text}</DetailText>
                        </div> 
                    </div>
                </div>
                </MovieContainer>
                )
                
            }
}

export default MovieDetails
