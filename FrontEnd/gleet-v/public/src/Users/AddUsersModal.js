
import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddUserModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/Users', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({              
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Email:event.target.Email.value,
                Username:event.target.Username.value,
                Passwordi:event.target.Passwordi.value,
                Mosha:event.target.Mosha.value,
                VitiLindjes:event.target.VitiLindjes.value,
                UserType:event.target.UserType.value,
                Roli:event.target.Roli.value,
                Foto:event.target.Foto.value,
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
                            Add User
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlI="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                            placeholder="Emri" />
                                    </Form.Group>

                                    <Form.Group controlI="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                            placeholder="Mbiemri" />
                                    </Form.Group>

                                    <Form.Group controlI="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="Email" required
                                            placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group controlI="Username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name="Username" required
                                            placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlI="Passwordi">
                                        <Form.Label>Passwordi</Form.Label>
                                        <Form.Control type="password" name="Passwordi" required
                                            placeholder="Passwordi" />
                                    </Form.Group>

                                    <Form.Group controlI="Mosha">
                                        <Form.Label>Mosha</Form.Label>
                                        <Form.Control type="text" name="Mosha" required
                                            placeholder="Mosha" />
                                    </Form.Group>

                                    <Form.Group controlI="VitiLindjes">
                                        <Form.Label>VitiLindjes</Form.Label>
                                        <Form.Control type="text" name="VitiLindjes" required
                                            placeholder="VitiLindjes" />
                                    </Form.Group>

                                    <Form.Group controlI="UserType">
                                        <Form.Label>UserType</Form.Label>
                                        <Form.Control type="text" name="UserType" required
                                            placeholder="UserType" />
                                    </Form.Group>

                                    <Form.Group controlI="Roli">
                                        <Form.Label>Roli</Form.Label>
                                        <Form.Control type="text" name="Roli" required
                                            placeholder="Roli" />
                                    </Form.Group>

                                    <Form.Group controlI="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                            placeholder="Foto" />
                                    </Form.Group>

                                    <Form.Group controlI="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                            placeholder="Pershkrimi" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add User
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