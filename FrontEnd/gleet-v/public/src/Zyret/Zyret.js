


import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddZyretModal} from './AddZyretModal';



export class Zyret extends Component{

    constructor(props){
        super(props);
        this.state={Zyret:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'zyret')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Zyret:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteZyret(zyrid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'zyret/'+zyrid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {zyrid, Zyret, zyrlokacioni, zyrfoto, zyrkontakti
         } =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Zyret_ID</th>
                            <th>Lokacioni</th>
                            <th>Foto</th>
                            <th>Kontakti</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {Zyret.map(zyr=>
                            <tr key={zyr.Zyret_ID}>
                                <td>{zyr.Zyret_ID}</td>
                                <td>{zyr.Lokacioni}</td>
                                <td>{zyr.Foto}</td>
                                <td>{zyr.Kontakti}</td>
                                
                                <td>
                                    <ButtonToolbar>
                                

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteZyret(zyr.Zyret_ID)}>
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
                        Add Zyre
                    </Button>

                    <AddZyretModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddZyretModal>
                </ButtonToolbar>
            </div>
        )
    }
}