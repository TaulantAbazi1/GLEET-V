




import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditGjuhaModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Gjuha',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Gjuha_ID:event.target.Gjuha_ID.value,
                EmriGjuhes:event.target.EmriGjuhes.value,
                PershkrimiGjuhes:event.target.PershkrimiGjuhes.value,

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
                            Edit Gjuha
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Gjuha_ID">
                                        <Form.Label>Gjuha_ID</Form.Label>
                                        <Form.Control type="text" name="Gjuha_ID" required
                                        disabled
                                        defaultValue={this.props.gjid}
                                         placeholder="Gjuha_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="EmriGjuhes">
                                        <Form.Label>EmriGjuhes</Form.Label>
                                        <Form.Control type="text" name="EmriGjuhes" required
                                        defaultValue={this.props.gjemrigjuhes}
                                         placeholder="EmriGjuhes"/>
                                    </Form.Group>

                                    <Form.Group controlId="PershkrimiGjuhes">
                                        <Form.Label>PershkrimiGjuhes</Form.Label>
                                        <Form.Control type="text" name="PershkrimiGjuhes" required
                                        defaultValue={this.props.gjpershkrimigjuhes}
                                         placeholder="PershkrimiGjuhes"/>
                                    </Form.Group>
                                   
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Gjuha
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