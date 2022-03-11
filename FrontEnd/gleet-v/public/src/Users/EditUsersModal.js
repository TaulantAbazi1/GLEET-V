


import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditUserModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log("DEBUGGING");
        fetch('http://localhost:5000/api/users',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ID:event.target.ID.value,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Email:event.target.Email.value,
                Username:event.target.Username.value,
                Passwordi:event.target.Passwordi.value,
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
                            Edit User
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
                                        defaultValue={this.props.usrid}
                                         placeholder="ID"/>
                                    </Form.Group>
                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                        defaultValue={this.props.usremri}
                                         placeholder="Emri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                        defaultValue={this.props.usrmbiemri}
                                         placeholder="Mbiemri"/>
                                    </Form.Group>

                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" name="Email" required
                                        defaultValue={this.props.usremail   }
                                         placeholder="Email"/>
                                    </Form.Group>

                                    <Form.Group controlId="Username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" name="Username" required
                                        defaultValue={this.props.usrusername}
                                         placeholder="Username"/>
                                    </Form.Group>

                                    <Form.Group controlId="Passwordi">
                                        <Form.Label>Passwordi</Form.Label>
                                        <Form.Control type="password" name="Passwordi" required
                                        defaultValue={this.props.usrpasswordi}
                                         placeholder="Passwordi"/>
                                    </Form.Group>

                                
                                    

                                    
                                    <Form.Group controlId="Roli">
                                        <Form.Label>Roli</Form.Label>
                                        <Form.Control type="text" name="Roli" required
                                        defaultValue={this.props.usrroli}
                                         placeholder="Roli"/>
                                    </Form.Group>

                                    
                                    <Form.Group controlId="Foto">
                                        <Form.Label>Foto</Form.Label>
                                        <Form.Control type="text" name="Foto" required
                                        defaultValue={this.props.usrfoto}
                                         placeholder="Foto"/>
                                    </Form.Group>

                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Pershkrimi" required
                                        defaultValue={this.props.usrpershkrimi}
                                         placeholder="Pershkrimi"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update User
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