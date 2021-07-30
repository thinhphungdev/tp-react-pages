import axios from 'axios';
import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import {updateTableData} from '../../store/tableSlice.js';
import { Button, Modal } from 'react-bootstrap';
import { API_URL } from '../../config.js';

function CustomModal(props) {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const emailRef = useRef();
    const positionRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        if (nameRef.current.value === '' || emailRef.current.value === '' || positionRef.current.value === '') return;

        const newEmployee = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            position: positionRef.current.value
        }

        axios.post(API_URL, newEmployee)
        .then(response => dispatch(updateTableData(response.data)))
        .catch(err => console.log('err', err))
        .finally(() =>  props.closeModal())
    }

    return (
            <Modal show={props.show} onHide={props.closeModal}>
            
                <Modal.Header closeButton>
                    <Modal.Title>Add new Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={submitHandler} className="modal-form">
                        <label htmlFor="name" id="name" >Name:</label>
                        <input ref={nameRef} id="name" type="text" required />

                        <label htmlFor="email" id="email" >Email:</label>
                        <input ref={emailRef} id="email" type="email" required />

                        <label htmlFor="position" id="position">Position:</label>
                        <input ref={positionRef} id="position" type="text" required />

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
    )
}

export default CustomModal;
