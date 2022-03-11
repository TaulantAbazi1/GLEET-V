

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditReturnTModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/ReturnT',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ReturnT_ID:event.target.ReturnT_ID.value,
                ReturnTime:event.target.ReturnTime.value,
                ReturnDate:event.target.ReturnDate.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert(error);
        })
    }
    render(){
        return(
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Return Time
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="ReturnT_ID">
                                        <Form.Label>ReturnT_ID</Form.Label>
                                        <Form.Control type="text" name="ReturnT_ID" required
                                        disabled
                                        defaultValue={this.props.reid}
                                         placeholder="ReturnT_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="ReturnTime">
                                        <Form.Label>ReturnTime</Form.Label>
                                        <Form.Control type="text" name="ReturnTime" required
                                        defaultValue={this.props.rereturntime}
                                         placeholder="ReturnTime"/>
                                    </Form.Group>

                                    <Form.Group controlId="ReturnDate">
                                        <Form.Label>ReturnDate</Form.Label>
                                        <Form.Control type="date" name="ReturnDate" required
                                        defaultValue={this.props.rereturndate}
                                         placeholder="ReturnDate"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Return Time
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}