

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditDestinacionetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Destinacionet',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Destinacionet_ID:event.target.Destinacionet_ID.value,
                Emri:event.target.Emri.value,
                Logo:event.target.Logo.value,
                Banner:event.target.Banner.value,
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
                            Edit Destinacionet
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Destinacionet_ID">
                                        <Form.Label>Destinacionet_ID</Form.Label>
                                        <Form.Control type="text" name="Destinacionet_ID" required
                                        disabled
                                        defaultValue={this.props.destinacionetid}
                                         placeholder="Destinacionet_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                        defaultValue={this.props.destinacionetemri}
                                         placeholder="Emri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Logo">
                                        <Form.Label>Logo</Form.Label>
                                        <Form.Control type="text" name="Logo" required
                                        defaultValue={this.props.destinacionetlogo}
                                         placeholder="Logo"/>
                                    </Form.Group>

                                    <Form.Group controlId="Banner">
                                        <Form.Label>Banner</Form.Label>
                                        <Form.Control type="text" name="Banner" required
                                        defaultValue={this.props.destinacionetbanner}
                                         placeholder="Banner"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.destinacionetpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Destinacionet
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