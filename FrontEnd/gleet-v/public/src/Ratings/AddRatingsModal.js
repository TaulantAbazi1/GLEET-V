

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddRatingsModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/Ratings', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({              
                Pershkrimi:event.target.Pershkrimi.value,
                Vlersimi:event.target.Vlersimi.value,

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
                            Add Rating
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                            placeholder="Pershkrimi" />
                                    </Form.Group>

                                    <Form.Group controlI="Vlersimi">
                                        <Form.Label>Vlersimi</Form.Label>
                                        <Form.Control type="text" name="Vlersimi" required
                                            placeholder="Vlersimi" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Rating
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