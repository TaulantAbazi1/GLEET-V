

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditAntaresimiModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Antaresimi',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Antaresimi_ID:event.target.Antaresimi_ID.value,
                Niveli:event.target.Niveli.value,

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
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
                            Edit Antaresimi
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Antaresimi_ID">
                                        <Form.Label>Antaresimi_ID</Form.Label>
                                        <Form.Control type="text" name="Antaresimi_ID" required
                                        disabled
                                        defaultValue={this.props.anid}
                                         placeholder="Antaresimi_ID"/>
                                    </Form.Group>

                                    <Form.Group controlId="Niveli">
                                        <Form.Label>Niveli</Form.Label>
                                        <Form.Control type="text" name="Niveli" required
                                        defaultValue={this.props.anniveli}
                                         placeholder="Niveli"/>
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Antaresimi
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