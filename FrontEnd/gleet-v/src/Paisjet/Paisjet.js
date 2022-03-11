

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPaisjetModal} from '../Paisjet/AddPaisjetModal';
import {EditPaisjetModal} from '../Paisjet/EditPaisjetModal';


export class Paisjet extends Component{

    constructor(props){
        super(props);
        this.state={paj:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Paisjet')
        .then(response=>response.json())
        .then(data=>{
            this.setState({paj:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deletePaisjet(paid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Paisjet/'+paid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {paj, pa, paemripaisjes, pafoto, papershkrimipaisjeve, pamodeli, 
            panumripaisjes,paid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Paisjet_ID</th>
                            <th>EmriPaisjes</th>
                            <th>Foto</th>
                            <th>PershkrimiPaisjeve</th>
                            <th>Modeli</th>
                            <th>NumriPaisjes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paj.map(pa=>
                            <tr key={pa.Paisjet_ID}>
                                <td>{pa.Paisjet_ID}</td>
                                <td>{pa.EmriPaisjes}</td>
                                <td>{pa.Foto}</td>
                                <td>{pa.PershkrimiPaisjeve}</td>
                                <td>{pa.Modeli}</td>
                                <td>{pa.NumriPaisjes}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            paid:pa.Paisjet_ID,paemripaisjes:pa.EmriPaisjes,pafoto:pa.Foto,papershkrimipaisjeve:pa.PershkrimiPaisjeve,
                                            pamodeli:pa.Modeli,panumripaisjes:pa.NumriPaisjes})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deletePaisjet(pa.Paisjet_ID)}>
                                                Delete
                                            </Button>

                                            <EditPaisjetModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            paid={paid}
                                            paemripaisjes={paemripaisjes}
                                            pafoto={pafoto}
                                            papershkrimipaisjeve={papershkrimipaisjeve}
                                            pamodeli={pamodeli}
                                            panumripaisjes={panumripaisjes}
                                            />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Paisjet
                    </Button>

                    <AddPaisjetModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddPaisjetModal>
                </ButtonToolbar>
            </div>
        )
    }
}