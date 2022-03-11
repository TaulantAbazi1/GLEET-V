import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditToSModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/ToS',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ToS_ID:event.target.ToS_ID.value,
                PershkrimiToS:event.target.PershkrimiToS.value

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
                            Edit Terms of Services
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="ToS_ID">
                                        <Form.Label>ToS_ID</Form.Label>
                                        <Form.Control type="text" name="ToS_ID" required
                                        disabled
                                        defaultValue={this.props.tosid}
                                         placeholder="ToS_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="PershkrimiToS">
                                        <Form.Label>PershkrimiToS</Form.Label>
                                        <Form.Control type="text" name="PershkrimiToS" required
                                        defaultValue={this.props.tosPershkrimiToS}
                                         placeholder="PershkrimiToS"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Terms of Services
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