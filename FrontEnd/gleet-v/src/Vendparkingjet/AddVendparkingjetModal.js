import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddVendparkingjetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/vendparkingjet',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
                Adresa:event.target.Adresa.value,
                Rruga:event.target.Rruga.value,
                NumriMakinave:event.target.NumriMakinave .value
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
            Add Vendparkimi
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Adresa">
                        <Form.Label>Adresa</Form.Label>
                        <Form.Control type="text" name="Adresa" required 
                        placeholder="Adresa"/>
                    </Form.Group>

                    <Form.Group controlId="Rruga">
                        <Form.Label>Rruga</Form.Label>
                        <Form.Control type="text" name="Rruga" required 
                        placeholder="Rruga"/>
                    </Form.Group>

                    <Form.Group controlId="NumriMakinave">
                        <Form.Label>NumriMakinave</Form.Label>
                        <Form.Control type="text" name="NumriMakinave" required 
                        placeholder="NumriMakinave"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Adresa
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