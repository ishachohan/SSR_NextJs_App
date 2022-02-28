import React,  { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import styles from "../styles/AddMovie.module.css"
import homestyles from "../styles/Home.module.css"
import { useFormik } from "formik";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


function AddMovie(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const listClasses = [styles.backstlyes , styles.fontstyles2].join(" ");
    const listClasses1 = [styles.backstlyes2 , styles.fontstyles2].join(" ");
    const listClasses2 = [styles.backstlyes3 ,styles.fontstyles2].join(" ")

    var data = [
        {value: 'Crime', label: 'Crime',isSelected: true},
        {value: 'Documentary', label: 'Documentary'},
        {value: 'Horror', label: 'Horror'},
        {value: 'Comedy', label: 'Comedy', isSelected: true}
    ];

    const initialTitle = 'ADD MOVIE'     

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
        initialValues: { title: "Moana" , movieurl:"https://", rating:"0", 
                         releasedate:"dd/mm/yyyy", genres:[], overview:"", runtime:"90" },
        validate,
        onSubmit: values => {
            var data = JSON.stringify(values,null,2);
            console.log(data);
        }
      });

    return (
        <React.Fragment>    
            <input type="button" onClick={handleShow} className={homestyles.addmoviesbtn} value="+ ADD MOVIES" />          
                    <Modal show={show} onHide={handleClose}  dialogClassName="modal-content">    
                        <Modal.Header className={styles.headerbackstyle} closeButton>
                            <Modal.Title>{initialTitle}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className={styles.addmovieModalbox}>
                        <div className="container">
                            <div className="left">
                                <label className={styles.fontstyles} htmlFor="title">TITLE</label>
                                <input type="text" className={listClasses}
                                   placeholder="TITLE" value={formik.values.title} id="title" name="title" 
                                   onChange={formik.handleChange}/>
                                {formik.errors.title? <div className={styles.fontstyles2}>{formik.errors.title}</div> : null}
                                
                                <label className={styles.fontstyles} htmlFor="movieurl">MOVIE URL</label>
                                <input type="text" className={listClasses} id="movieurl" name="movieurl"
                                    placeholder="https://" value={formik.values.movieurl} 
                                    onChange={formik.handleChange}/>
                                {formik.errors.movieurl ? <div className={listClasses}>{formik.errors.movieurl}</div> : null}

                                <label className={styles.fontstyles} htmlFor="genres">GENRE</label>
                                <ReactMultiSelectCheckboxes options = {data} className={styles.MultiSelectstyle}
                                 id="genres" name="genres"/>

                               
                            </div>
                            <div className="right">
                                <label className={styles.fontstyles} htmlFor="releasedate">RELEASE DATE</label>
                                <input type="date" className={listClasses1} id="releasedate" name="releasedate"
                                    placeholder="SELECT DATE" value={formik.values.releasedate} 
                                    onChange={formik.handleChange}/>
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
                                <label className={styles.fontstyles} htmlFor="overview">OVERVIEW</label>
                                <textarea className={listClasses2} id="overview" name="overview"
                                       placeholder="Movie description" value={formik.values.overview} 
                                       onChange={formik.handleChange} rows={10} cols={100} />
                                {formik.errors.overview ? <div className={styles.fontstyles2}>{formik.errors.overview}</div> : null}
                        </div>
                           
                        </Modal.Body>
                        
                        <Modal.Footer className={styles.headerbackstyle}>
                        <Button variant="custom" onClick={handleClose} >
                            RESET
                        </Button>
                        <Button variant="customsubmit" onClick={formik.handleSubmit}>
                            SUBMIT
                        </Button>
                        </Modal.Footer>
                    </Modal>
        </React.Fragment>

    );
}
export default AddMovie