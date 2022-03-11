

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditPaisjetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Paisjet',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Paisjet_ID:event.target.Paisjet_ID.value,
                EmriPaisjes:event.target.EmriPaisjes.value,
                Foto:event.target.Foto.value,
                PershkrimiPaisjeve:event.target.PershkrimiPaisjeve.value,
                Modeli:event.target.Modeli.value,
                NumriPaisjes:event.target.NumriPaisjes.value

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
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
                            Edit Paisjet
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Paisjet_ID">
                                        <Form.Label>Paisjet_ID</Form.Label>
                                        <Form.Control type="text" name="Paisjet_ID" required
                                        disabled
                                        defaultValue={this.props.paid}
                                         placeholder="Paisjet_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="EmriPaisjes">
                                        <Form.Label>EmriPaisjes</Form.Label>
                                        <Form.Control type="text" name="EmriPaisjes" required
                                        defaultValue={this.props.paemripaisjes}
                                         placeholder="EmriPaisjes"/>
                                    </Form.Group>

                                    <Form.Group controlId="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                        defaultValue={this.props.pafoto}
                                         placeholder="Foto"/>
                                    </Form.Group>

                                    <Form.Group controlId="PershkrimiPaisjeve">
                                        <Form.Label>PershkrimiPaisjeve</Form.Label>
                                        <Form.Control type="text" name="PershkrimiPaisjeve" required
                                        defaultValue={this.props.pershkrimipaisjeve}
                                         placeholder="PershkrimiPaisjeve"/>
                                    </Form.Group>

                                    <Form.Group controlId="Modeli">
                                        <Form.Label>Modeli</Form.Label>
                                        <Form.Control type="text" name="Modeli" required
                                        defaultValue={this.props.pamodeli}
                                         placeholder="Modeli"/>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="NumriPaisjes">
                                        <Form.Label>NumriPaisjes</Form.Label>
                                        <Form.Control type="text" name="NumriPaisjes" required
                                        defaultValue={this.props.panumripaisjes}
                                         placeholder="NumriPaisjes"/>
                                    </Form.Group>
                                    


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Paisjet
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