import React,  { useState } from "react";
import { Button, Modal} from 'react-bootstrap';
import styles from "../styles/AddMovie.module.css"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import TextField from '@material-ui/core/TextField';
import { useFormik } from "formik";
import homestyles from "../styles/Home.module.css"

function AddMovie(){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const listClasses = [styles.backstlyes , styles.fontstyles2].join(" ");
    const listClasses1 = [styles.backstlyes2 , styles.fontstyles2].join(" ");
    const listClasses2 = [styles.backstlyes3 ,styles.fontstyles2].join(" ")


    var MockData={
        Movie : "Moana",
        Date : "14-11-2016",
        Url:"https://www.moana.com",
        Rating: 7.8,
        running:"1h 47min",
        overview: "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
    }


    var data = [
        {value: 'Crime', label: 'Crime',isSelected: true},
        {value: 'Documentary', label: 'Documentary'},
        {value: 'Horror', label: 'Horror'},
        {value: 'Comedy', label: 'Comedy', isSelected: true}
    ];

    const validate = values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        } else if (values.title.length > 40) {
          errors.title = 'Must be 40 characters or less';
        }
      
        if (!values.movieurl) {
          errors.movieurl = 'Required';
        } else if (values.movieurl.length > 50) {
          errors.movieurl = 'Must be 50 characters or less';
        }

        if (!values.rating) {
            errors.rating = 'Required';
        } else if (values.rating.length > 3) {
            errors.rating = 'Must be 2-3 characters or less';
        }

        if (!values.releasedate) {
            errors.releasedate = 'Required';
        }

        if (!values.overview) {
            errors.overview = 'Required';
        } else if (values.overview.length > 500) {
            errors.overview = 'Must be 500 characters or less';
        }
        if (!values.runtime) {
            errors.runtime = 'Required';
        } else if (0> values.runtime > 150) {
            errors.runtime = 'Must be between 0-150';
        }
        return errors;
      };
    const formik = useFormik({
        initialValues: { title: "Moana" , movieurl:"https://www.moana.com", rating:"7.8", 
                         releasedate:"14-11-2016", genres:[], overview:"Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.",
                         runtime:"107" },
        validate,
        onSubmit: values => {
            var data = JSON.stringify(values,null,2);
            console.log(data);
        }
      });
    return (
            <React.Fragment>
                  
                    <input type="button" onClick={handleShow} className={homestyles.editmoviesbtn} value="+EDIT MOVIES" />              
                    <Modal show={show} onHide={handleClose} dialogClassName="modal-content">
                            
                        <Modal.Header className={styles.headerbackstyle} closeButton>
                            <Modal.Title>EDIT MOVIE</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles.addmovieModalbox}>
                            <div className="container">
                                <div className="left">
                                    <label className={styles.fontstyles}  htmlFor="title">TITLE</label>
                                    <input type="text" className={styles.backstlyes} name="title" id="title"
                                        value={formik.values.title} onChange={formik.handleChange} placeholder="TITLE" />
                                    {formik.errors.title? <div className={styles.fontstyles2}>{formik.errors.title}</div> : null}
                                    
                                    <label className={styles.fontstyles} htmlFor="movieurl">MOVIE URL</label>
                                    <input type="text" className={listClasses} id="movieurl" name="movieurl"
                                        placeholder="https://" value={formik.values.movieurl} 
                                        onChange={formik.handleChange}/>
                                    {formik.errors.movieurl ? <div className={styles.fontstyles2}>{formik.errors.movieurl}</div> : null}

                                    <label className={styles.fontstyles} htmlFor="genres">GENRE</label>
                                    <ReactMultiSelectCheckboxes options = {data} className="MultiSelectstyle"
                                    id="genres" name="genres"/>
                                
                                </div>
                                <div className="right">
                                    <label className={styles.fontstyles} htmlFor="releasedate">RELEASE DATE</label>
                                    <TextField id="releasedate" type="date" defaultValue={MockData.Date} className={styles.backstlyes2}
                                            InputProps={{color: "white"}} name="releasedate"
                                            InputLabelProps={{ shrink: true}}/>
                                    {formik.errors.releasedate ? <div className={styles.fontstyles2}>{formik.errors.releasedate}</div> : null}
                                
                                    <label className={styles.fontstyles} htmlFor="rating">RATING</label>
                                    <input type="text" className={listClasses1} id="rating" name="rating"
                                        value={formik.values.rating} onChange={formik.handleChange}/>
                                    {formik.errors.rating ? <div className={styles.fontstyles2}>{formik.errors.rating}</div> : null}

                                    <label className={styles.fontstyles} htmlFor="runtime">RUNTIME</label>
                                    <input type="number" placeholder="minutes" className={listClasses1}
                                        id="runtime" name="runtime"
                                        value={formik.values.runtime} onChange={formik.handleChange}/>
                                    {formik.errors.runtime ? <div className={styles.fontstyles2}>{formik.errors.runtime}</div> : null}
                                </div>
                            </div>
                                <div>
                                    <label className={styles.fontstyles2} htmlFor="overview">OVERVIEW</label>
                                    <textarea className={styles.backstlyes3} 
                                        placeholder="Movie description" name="overview" id="overview"
                                        rows={40} cols={100} 
                                        onChange = {formik.handleChange}
                                        value={formik.values.overview}
                                        >
                                    {formik.errors.overview ? <div className={styles.fontstyles2}>{formik.errors.overview}</div> : null}           
                                    </textarea>   
                                </div>
                        </Modal.Body>
                        
                        <Modal.Footer className={styles.headerbackstyle}>
                        <Button variant="custom" onClick={handleClose} >
                            RESET
                        </Button>
                        <Button   variant="customsubmit" onClick={formik.handleSubmit}>
                            SUBMIT
                        </Button>
                        </Modal.Footer>
                    </Modal>              
            </React.Fragment>
        );
}
export default AddMovie