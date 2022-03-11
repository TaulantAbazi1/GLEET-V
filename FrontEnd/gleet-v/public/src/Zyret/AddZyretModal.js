

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddZyretModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/zyret', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({           
                Lokacioni:event.target.Lokacioni.value,
                Foto:event.target.Foto.value,
                Kontakti:event.target.Kontakti.value,
             
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
                            Add Zyret
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="EmriPaisjes">
                                        <Form.Label>Lokacioni</Form.Label>
                                        <Form.Control type="text" name="Lokacioni" required
                                            placeholder="Lokacioni" />
                                    </Form.Group>

                                    <Form.Group controlI="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                            placeholder="Foto" />
                                    </Form.Group>

                                    <Form.Group controlI="Kontakti">
                                        <Form.Label>Kontakti</Form.Label>
                                        <Form.Control type="text" name="Kontakti" required
                                            placeholder="Kontakti" />
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Zyre
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