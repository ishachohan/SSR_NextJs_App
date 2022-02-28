import React,  { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import "../styles/AddMovie.module.css"
import { useFormik } from "formik";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


function AddMovie(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <input type="button" onClick={handleShow} className="addmoviesbtn" value="+ ADD MOVIES" />          
                    <Modal show={show} onHide={handleClose}  dialogClassName="modal-content">    
                        <Modal.Header className="headerbackstyle" closeButton>
                            <Modal.Title>{initialTitle}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="addmovieModalbox">
                        <div className="container">
                            <div className="left">
                                <label className="fontstyles" htmlFor="title">TITLE</label>
                                <input type="text" className="backstlyes fontstyles2" 
                                   placeholder="TITLE" value={formik.values.title} id="title" name="title" 
                                   onChange={formik.handleChange}/>
                                {formik.errors.title? <div className="fontstyles2">{formik.errors.title}</div> : null}
                                
                                <label className="fontstyles" htmlFor="movieurl">MOVIE URL</label>
                                <input type="text" className="backstlyes fontstyles2" id="movieurl" name="movieurl"
                                    placeholder="https://" value={formik.values.movieurl} 
                                    onChange={formik.handleChange}/>
                                {formik.errors.movieurl ? <div className="fontstyles2">{formik.errors.movieurl}</div> : null}

                                <label className="fontstyles" htmlFor="genres">GENRE</label>
                                <ReactMultiSelectCheckboxes options = {data} className="MultiSelectstyle"
                                 id="genres" name="genres"/>

                               
                            </div>
                            <div className="right">
                                <label className="fontstyles" htmlFor="releasedate">RELEASE DATE</label>
                                <input type="date" className="backstlyes2 fontstyles2" id="releasedate" name="releasedate"
                                    placeholder="SELECT DATE" value={formik.values.releasedate} 
                                    onChange={formik.handleChange}/>
                                {formik.errors.releasedate ? <div className="fontstyles2">{formik.errors.releasedate}</div> : null}

                                <label className="fontstyles" htmlFor="rating">RATING</label>
                                <input type="text" className="backstlyes2 fontstyles2" id="rating" name="rating"
                                    value={formik.values.rating} onChange={formik.handleChange}/>
                                {formik.errors.rating ? <div className="fontstyles2">{formik.errors.rating}</div> : null}

                                <label className="fontstyles" htmlFor="runtime">RUNTIME</label>
                                <input type="number" placeholder="minutes" className="backstlyes2 fontstyles2"
                                    id="runtime" name="runtime"
                                    value={formik.values.runtime} onChange={formik.handleChange}/>
                                {formik.errors.runtime ? <div className="fontstyles2">{formik.errors.runtime}</div> : null}

                            </div>
                        </div>
                        <div>
                                <label className="fontstyles" htmlFor="overview">OVERVIEW</label>
                                <textarea className="backstlyes3 fontstyles2" id="overview" name="overview"
                                       placeholder="Movie description" value={formik.values.overview} 
                                       onChange={formik.handleChange} rows={10} cols={100} />
                                {formik.errors.overview ? <div className="fontstyles2">{formik.errors.overview}</div> : null}
                        </div>
                           
                        </Modal.Body>
                        
                        <Modal.Footer className="headerbackstyle">
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