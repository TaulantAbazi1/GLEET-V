

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddContactFormModal} from './AddContactFormModal';

export class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state={ContactForm:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ContactForm')
        .then(response=>response.json())
        .then(data=>{
            this.setState({ContactForm:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteContactForm(ContactFormID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'ContactForm/'+ContactFormID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {ContactForm, ContactFormEmri, ContactFormEmail, ContactFormMesazhi, ContactFormID} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ContactForm_ID</th>
                            <th>Emri</th>
                            <th>Email</th>
                            <th>Mesazhi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ContactForm.map(cf=>
                            <tr key={cf.ContactForm_ID}>
                                <td>{cf.ContactForm_ID}</td>
                                <td>{cf.Emri}</td>
                                <td>{cf.Email}</td>
                                <td>{cf.Mesazhi}</td>
                                <td>
                                    <ButtonToolbar>
                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteContactForm(cf.ContactForm_ID)}>
                                                Delete
                                            </Button>

                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Contact Form
                    </Button>

                    <AddContactFormModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddContactFormModal>
                </ButtonToolbar>
            </div>
        )
    }
}