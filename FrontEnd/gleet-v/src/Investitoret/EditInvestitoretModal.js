

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditInvestitoretModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Investitoret',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Investitoret_ID:event.target.Investitoret_ID.value,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Pershkrimi:event.target.Pershkrimi.value,
                Foto:event.target.Foto.value,
                Kontakti:event.target.Kontakti.value

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
                            Edit Investitoret
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Investitoret_ID">
                                        <Form.Label>Investitoret_ID</Form.Label>
                                        <Form.Control type="text" name="Investitoret_ID" required
                                        disabled
                                        defaultValue={this.props.invid}
                                         placeholder="Investitoret_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                        defaultValue={this.props.invemri}
                                         placeholder="Emri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.invpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                        defaultValue={this.props.invmbiemri}
                                         placeholder="Mbiemri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                        defaultValue={this.props.invfoto}
                                         placeholder="Foto"/>
                                    </Form.Group>

                                    <Form.Group controlId="Kontakti">
                                        <Form.Label>Kontakti</Form.Label>
                                        <Form.Control type="text" name="Kontakti" required
                                        defaultValue={this.props.invkontakti}
                                         placeholder="Kontakti"/>
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Investitoret
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