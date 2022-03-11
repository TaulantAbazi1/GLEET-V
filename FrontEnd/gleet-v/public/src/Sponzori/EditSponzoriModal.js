import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditSponzoriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Sponzorat',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Sponzori_ID:event.target.Sponzori_ID.value,
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
                            Edit Sponzori
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Sponzori_ID">
                                        <Form.Label>Sponzori_ID</Form.Label>
                                        <Form.Control type="text" name="Sponzori_ID" required
                                        disabled
                                        defaultValue={this.props.spid}
                                         placeholder="Sponzori_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="EmriSponzorit">
                                        <Form.Label>EmriSponzorit</Form.Label>
                                        <Form.Control type="text" name="EmriSponzorit" required
                                        defaultValue={this.props.spemrisponzorit}
                                         placeholder="EmriSponzorit"/>
                                    </Form.Group>

                                    <Form.Group controlId="Logo">
                                        <Form.Label>Logo</Form.Label>
                                        <Form.Control type="text" name="Logo" required
                                        defaultValue={this.props.splogo}
                                         placeholder="Logo"/>
                                    </Form.Group>

                                    <Form.Group controlId="Banner">
                                        <Form.Label>Banner</Form.Label>
                                        <Form.Control type="text" name="Banner" required
                                        defaultValue={this.props.spbanner}
                                         placeholder="Banner"/>
                                    </Form.Group>

                                    <Form.Group controlId="PershkrimiSponzorit">
                                        <Form.Label>PershkrimiSponzorit</Form.Label>
                                        <Form.Control type="text" name="PershkrimiSponzorit" required
                                        defaultValue={this.props.sppershkrimisponzorit}
                                         placeholder="PershkrimiSponzorit"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Sponzori
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