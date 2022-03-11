

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddSponzoriModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/Sponzorat', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({              
                EmriSponzorit:event.target.EmriSponzorit.value,
                Logo:event.target.Logo.value,
                Banner:event.target.Banner.value,
                PershkrimiSponzorit:event.target.PershkrimiSponzorit.value

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
                            Add Sponzori
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="EmriSponzorit">
                                        <Form.Label>EmriSponzorit</Form.Label>
                                        <Form.Control type="text" name="EmriSponzorit" required
                                            placeholder="EmriSponzorit" />
                                    </Form.Group>

                                    <Form.Group controlI="Logo">
                                        <Form.Label>Logo</Form.Label>
                                        <Form.Control type="text" name="Logo" required
                                            placeholder="Logo" />
                                    </Form.Group>

                                    <Form.Group controlI="Banner">
                                        <Form.Label>Banner</Form.Label>
                                        <Form.Control type="text" name="Banner" required
                                            placeholder="Banner" />
                                    </Form.Group>

                                    <Form.Group controlI="PershkrimiSponzorit">
                                        <Form.Label>PershkrimiSponzorit</Form.Label>
                                        <Form.Control type="text" name="PershkrimiSponzorit" required
                                            placeholder="PershkrimiSponzorit" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Sponzori
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