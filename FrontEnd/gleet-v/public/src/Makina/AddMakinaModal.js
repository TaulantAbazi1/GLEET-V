

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddMakinaModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/Makina', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({              
                Brandi:event.target.Brandi.value,
                Ngjyra:event.target.Ngjyra.value,
                Modeli:event.target.Modeli.value,
                Karburanti:event.target.Karburanti.value,
                Viti:event.target.Viti.value,
                Klasa:event.target.Klasa.value

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
                            Add Makina
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="Brandi">
                                        <Form.Label>Brandi</Form.Label>
                                        <Form.Control type="text" name="Brandi" required
                                            placeholder="Brandi" />
                                    </Form.Group>

                                    <Form.Group controlI="Modeli">
                                        <Form.Label>Modeli</Form.Label>
                                        <Form.Control type="text" name="Modeli" required
                                            placeholder="Modeli" />
                                    </Form.Group>

                                    <Form.Group controlI="Ngjyra">
                                        <Form.Label>Ngjyra</Form.Label>
                                        <Form.Control type="text" name="Ngjyra" required
                                            placeholder="Ngjyra" />
                                    </Form.Group>

                                    <Form.Group controlI="Karburanti">
                                        <Form.Label>Karburanti</Form.Label>
                                        <Form.Control type="text" name="Karburanti" required
                                            placeholder="Karburanti" />
                                    </Form.Group>

                                    <Form.Group controlI="Viti">
                                        <Form.Label>Viti</Form.Label>
                                        <Form.Control type="text" name="Viti" required
                                            placeholder="Viti" />
                                    </Form.Group>

                                    <Form.Group controlI="Klasa">
                                        <Form.Label>Klasa</Form.Label>
                                        <Form.Control type="text" name="Klasa" required
                                            placeholder="Klasa" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Makina
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