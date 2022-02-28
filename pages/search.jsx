import Header1 from "../components/Header1";
import SearchMovie from "../components/SearchMovie";
import styles from '../styles/App.module.css';

function search ()  {
        return(
            <div className= {styles.App_Home_Default_with_search_result}>
                <div className={styles.RectangleCopy2}>
                <SearchMovie />
                </div>
           </div>
        )
  }
export default search;