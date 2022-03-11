

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditMakinaModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Makina',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Makina_ID:event.target.Makina_ID.value,
                Brandi:event.target.Brandi.value,
                Modeli:event.target.Modeli.value,
                Ngjyra:event.target.Ngjyra.value,
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
                            Edit Makina
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Makina_ID">
                                        <Form.Label>Makina_ID</Form.Label>
                                        <Form.Control type="text" name="Makina_ID" required
                                        disabled
                                        defaultValue={this.props.makid}
                                         placeholder="Makina_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Brandi">
                                        <Form.Label>Brandi</Form.Label>
                                        <Form.Control type="text" name="Brandi" required
                                        defaultValue={this.props.makbrandi}
                                         placeholder="Brandi"/>
                                    </Form.Group>

                                    <Form.Group controlId="Ngjyra">
                                        <Form.Label>Ngjyra</Form.Label>
                                        <Form.Control type="text" name="Ngjyra" required
                                        defaultValue={this.props.makngjyra}
                                         placeholder="Ngjyra"/>
                                    </Form.Group>

                                    <Form.Group controlId="Modeli">
                                        <Form.Label>Modeli</Form.Label>
                                        <Form.Control type="text" name="Modeli" required
                                        defaultValue={this.props.makmodeli}
                                         placeholder="Modeli"/>
                                    </Form.Group>

                                    <Form.Group controlId="Karburanti">
                                        <Form.Label>Karburanti</Form.Label>
                                        <Form.Control type="text" name="Karburanti" required
                                        defaultValue={this.props.makkarburanti}
                                         placeholder="Karburanti"/>
                                    </Form.Group>

                                    <Form.Group controlId="Viti">
                                        <Form.Label>Viti</Form.Label>
                                        <Form.Control type="text" name="Viti" required
                                        defaultValue={this.props.makviti}
                                         placeholder="Viti"/>
                                    </Form.Group>

                                    <Form.Group controlId="Klasa">
                                        <Form.Label>Klasa</Form.Label>
                                        <Form.Control type="text" name="Klasa" required
                                        defaultValue={this.props.makklasa}
                                         placeholder="Klasa"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Makina
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