

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddPaisjetModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/paisjet', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({           
                EmriPaisjes:event.target.EmriPaisjes.value,
                Foto:event.target.Foto.value,
                PershkrimiPaisjeve:event.target.PershkrimiPaisjeve.value,
                Modeli:event.target.Modeli.value,
                NumriPaisjes:event.target.NumriPaisjes.value,
                
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

    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Paisjet
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="EmriPaisjes">
                                        <Form.Label>EmriPaisjes</Form.Label>
                                        <Form.Control type="text" name="EmriPaisjes" required
                                            placeholder="EmriPaisjes" />
                                    </Form.Group>

                                    <Form.Group controlI="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                            placeholder="Foto" />
                                    </Form.Group>

                                    <Form.Group controlI="PershkrimiPaisjeve">
                                        <Form.Label>PershkrimiPaisjeve</Form.Label>
                                        <Form.Control type="text" name="PershkrimiPaisjeve" required
                                            placeholder="PershkrimiPaisjeve" />
                                    </Form.Group>

                                    <Form.Group controlI="Modeli">
                                        <Form.Label>Modeli</Form.Label>
                                        <Form.Control type="text" name="Modeli" required
                                            placeholder="Modeli" />
                                    </Form.Group>

                                    <Form.Group controlI="NumriPaisjes">
                                        <Form.Label>NumriPaisjes</Form.Label>
                                        <Form.Control type="text" name="NumriPaisjes" required
                                            placeholder="NumriPaisjes" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Paisjet
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