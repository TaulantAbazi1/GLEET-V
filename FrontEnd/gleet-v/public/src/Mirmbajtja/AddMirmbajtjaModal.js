import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddMirmbajtjaModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/Mirmbajtja', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({              
                Agjenda:event.target.Agjenda.value,
                LlojiMirmbajtjes:event.target.LlojiMirmbajtjes.value,
                Vertetimi:event.target.Vertetimi.value,
                Pershkrimi:event.target.Pershkrimi.value

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
                            Add Mirmbajtja
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="Agjenda">
                                        <Form.Label>Agjenda</Form.Label>
                                        <Form.Control type="text" name="Agjenda" required
                                            placeholder="Agjenda" />
                                    </Form.Group>

                                    <Form.Group controlI="LlojiMirmbajtjes">
                                        <Form.Label>LlojiMirmbajtjes</Form.Label>
                                        <Form.Control type="text" name="LlojiMirmbajtjes" required
                                            placeholder="LlojiMirmbajtjes" />
                                    </Form.Group>

                                    <Form.Group controlI="Vertetimi">
                                        <Form.Label>Vertetimi</Form.Label>
                                        <Form.Control type="text" name="Vertetimi" required
                                            placeholder="Vertetimi" />
                                    </Form.Group>

                                    <Form.Group controlI="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                            placeholder="Pershkrimi" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Mirmbajtja
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