import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditVendparkingjetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/vendparkingjet',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Parkingjet_ID:event.target.Parkingjet_ID.value,
                Rruga:event.target.Rruga.value,
                Adresa:event.target.Adresa.value,
                NumriMakinave:event.target.NumriMakinave.value

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
                            Edit Vendparkingjet
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Parkingjet_ID">
                                        <Form.Label>Parkingjet_ID</Form.Label>
                                        <Form.Control type="text" name="Parkingjet_ID" required
                                        disabled
                                        defaultValue={this.props.vendid}
                                         placeholder="Parkingjet_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Adresa">
                                        <Form.Label>Adresa</Form.Label>
                                        <Form.Control type="text" name="Adresa" required
                                        defaultValue={this.props.vendadresa}
                                         placeholder="Adresa"/>
                                    </Form.Group>

                                    <Form.Group controlId="Rruga">
                                        <Form.Label>Rruga</Form.Label>
                                        <Form.Control type="text" name="Rruga" required
                                        defaultValue={this.props.vendrruga}
                                         placeholder="Rruga"/>
                                    </Form.Group>

                                    <Form.Group controlId="NumriMakinave">
                                        <Form.Label>Numri Makinave</Form.Label>
                                        <Form.Control type="text" name="NumriMakinave" required
                                        defaultValue={this.props.vendnrmakinave}
                                         placeholder="NumriMakinave"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Rating
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