

import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditMirmbajtjaModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/Mirmbajtja',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Mirmbajtja_ID:event.target.Mirmbajtja_ID.value,
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
                            Edit Mirmbajtja
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="Mirmbajtja_ID">
                                        <Form.Label>Mirmbajtja_ID</Form.Label>
                                        <Form.Control type="text" name="Mirmbajtja_ID" required
                                        disabled
                                        defaultValue={this.props.mirid}
                                         placeholder="Mirmbajtja_ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Agjenda">
                                        <Form.Label>Agjenda</Form.Label>
                                        <Form.Control type="text" name="Agjenda" required
                                        defaultValue={this.props.miragjenda}
                                         placeholder="Agjenda"/>
                                    </Form.Group>

                                    <Form.Group controlId="Vertetimi">
                                        <Form.Label>Vertetimi</Form.Label>
                                        <Form.Control type="text" name="Vertetimi" required
                                        defaultValue={this.props.mirvertetimi}
                                         placeholder="Vertetimi"/>
                                    </Form.Group>

                                    <Form.Group controlId="LlojiMirmbajtjes">
                                        <Form.Label>LlojiMirmbajtjes</Form.Label>
                                        <Form.Control type="text" name="LlojiMirmbajtjes" required
                                        defaultValue={this.props.mirllojimirmbajtjes}
                                         placeholder="LlojiMirmbajtjes"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.mirpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Mirmbajtja
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