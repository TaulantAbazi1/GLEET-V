


import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditSherbimetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/sherbimet',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Sherbimi_ID:event.target.Sherbimi_ID.value,
                Emri:event.target.Emri.value,
                Foto:event.target.Foto.value,
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
                            Edit Sherbimi
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Sherbimi_ID">
                                        <Form.Label>Sherbimi_ID</Form.Label>
                                        <Form.Control type="text" name="Sherbimi_ID" required
                                        disabled
                                        defaultValue={this.props.sherid}
                                         placeholder="Sherbimi_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                        defaultValue={this.props.sheremri}
                                         placeholder="Emri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                        defaultValue={this.props.sherfoto}
                                         placeholder="Foto"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.sherpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Pershkrimi
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