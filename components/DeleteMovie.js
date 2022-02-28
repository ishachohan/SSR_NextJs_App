import React,  { useState } from "react";
import { Button, Modal} from 'react-bootstrap';
import "../styles/DeleteMovie.module.css"
import { useFormik } from "formik";

function DeleteMovie(){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

    const formik = useFormik({
        initialValues: {id:0 },
        onSubmit: values => {
            var data = JSON.stringify(values,null,2);
            handleClose();
            console.log(data);
        }
      });

    return (
        <React.Fragment>             
                <input type="button" onClick={handleShow} className="deletemoviesbtn" value="-DELETE MOVIES" />              
                <Modal show={show} onHide={handleClose}  dialogClassName="modal-content1" >
                
                    <Modal.Header className="headerbackstyle" closeButton>
                        <Modal.Title>DELETE MOVIE</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="headerbackstyle">
                        <div>
                            <label className="fontstyles2">Are you sure you want to delete this movie?</label>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="headerbackstyle">
                        <Button   variant="customsubmit" onClick={formik.handleSubmit}>
                        CONFIRM
                        </Button>
                    </Modal.Footer>

                </Modal>
            </React.Fragment>
    );
}
export default DeleteMovie