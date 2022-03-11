

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddVendparkingjetModal} from './AddVendparkingjetModal';
import {EditVendparkingjetModal} from './EditVendparkingjetModal';

export class Vendparkingjet extends Component{

    constructor(props){
        super(props);
        this.state={vends:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Vendparkingjet')
        .then(response=>response.json())
        .then(data=>{
            this.setState({vends:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteVendparkingjet(vendid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Vendparkingjet/'+vendid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {vends, vendid,vendadresa, vendrruga, vendnrmakinave}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Parkingjet_ID</th>
                        <th>Adresa</th>
                        <th>Rruga</th>
                        <th>NumriMakinave</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vends.map(vend=>
                            <tr key={vend.Parkingjet_ID}>
                                <td>{vend.Parkingjet_ID}</td>
                                <td>{vend.Adresa}</td>
                                <td>{vend.Rruga}</td>
                                <td>{vend.NumriMakinave}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        vendid:vend.Parkingjet_ID,vendadresa:vend.Adresa,vendrruga:vend.Rruga,vendnrmakinave:vend.NumriMakinave})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteVendparkingjet(vend.Parkingjet_ID)}>
            Delete
        </Button>

        <EditVendparkingjetModal show={this.state.editModalShow}
        onHide={editModalClose}
        vendid={vendid}
        vendadresa={vendadresa}
        vendrruga={vendrruga}
        vendnrmakinave={vendnrmakinave}/>
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Vendparkingjet</Button>

                    <AddVendparkingjetModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}