
import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditProfiliModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/profili',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID:event.target.ID.value,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Passwordi:event.target.Passwordi.value,
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
                            Edit Profili
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="ID">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control type="text" name="ID" required
                                        disabled
                                        defaultValue={this.props.prid}
                                         placeholder="ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                        defaultValue={this.props.premri}
                                         placeholder="Emri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                        defaultValue={this.props.prmbiemri}
                                         placeholder="Mbiemri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Passwordi">
                                        <Form.Label>Passwordi</Form.Label>
                                        <Form.Control type="password" name="Passwordi" required
                                        defaultValue={this.props.prpasswordi}
                                         placeholder="Passwordi"/>
                                    </Form.Group>

                                  

                             

                                    <Form.Group controlId="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                        defaultValue={this.props.prfoto}
                                         placeholder="Foto"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.prpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Profili
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