
import Homepage from "../components/Home"
import  {loadMovies} from '../store/configureStore'
import { connect } from "react-redux"
import styles from '../styles/App.module.css';

function Index (props)  {
  return(
    <div className= {styles.App_Home_Default_with_search_result}>
        <div className={styles.RectangleCopy2}>
           <Homepage movies={props.moviesList}/>
        </div>
   </div>
  )
}

const mapStateToProps = state => {
  return { moviesList : state.list }
 }
 
 const mapDispatchToProps = {
  loadMovies
 }

export default connect(mapStateToProps, mapDispatchToProps)(Index)



