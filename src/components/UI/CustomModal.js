import React, {useRef} from 'react';
import { Button, Modal } from 'react-bootstrap';

function CustomModal(props) {
    const nameRef = useRef();
    const emailRef = useRef();
    const positionRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const newEmployee = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            position: positionRef.current.value
        }

        console.log(newEmployee)
    
        props.closeModal();
    }

    return (
            <Modal show={props.show} onHide={props.closeModal}>
            
                <Modal.Header closeButton>
                    <Modal.Title>Add new Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={submitHandler} className="modal-form">
                        <label htmlFor="name" id="name" >Name:</label>
                        <input ref={nameRef} id="name" type="text" />

                        <label htmlFor="email" id="email" >Email:</label>
                        <input ref={emailRef} id="email" type="email" />

                        <label htmlFor="position" id="position">Position:</label>
                        <input ref={positionRef} id="position" type="text" />

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
    )
}

export default CustomModal;
