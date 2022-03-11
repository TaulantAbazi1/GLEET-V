
import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditAboutUsModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/AboutUs',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Pershkrimi_ID:event.target.Pershkrimi_ID.value,
                Pershkrimi:event.target.Pershkrimi.value,

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
                            Edit About Us
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Pershkrimi_ID">
                                        <Form.Label>Pershkrimi_ID</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi_ID" required
                                        disabled
                                        defaultValue={this.props.auid}
                                         placeholder="Pershkrimi_ID"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.aupershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update About Us
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