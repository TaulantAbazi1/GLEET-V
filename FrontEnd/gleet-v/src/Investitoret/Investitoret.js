import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddInvestitoretModal} from './AddInvestitoretModal';
import {EditInvestitoretModal} from './EditInvestitoretModal';

export class Investitoret extends Component{

    constructor(props){
        super(props);
        this.state={invest:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Investitoret')
        .then(response=>response.json())
        .then(data=>{
            this.setState({invest:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteInvestitoret(invid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Investitoret/'+invid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {invest, invemri, invmbiemri, invpershkrimi, invfoto, 
            invkontakti, invid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Investitoret_ID</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Pershkrimi</th>
                            <th>Foto</th>
                            <th>Kontakti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invest.map(inv=>
                            <tr key={inv.Investitoret_ID}>
                                <td>{inv.Investitoret_ID}</td>
                                <td>{inv.Emri}</td>
                                <td>{inv.Mbiemri}</td>
                                <td>{inv.Pershkrimi}</td>
                                <td>{inv.Foto}</td>
                                <td>{inv.Kontakti}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            invid:inv.Investitoret_ID,invemri:inv.Emri,invmbiemri:inv.Mbiemri,invpershkrimi:inv.Pershkrimi,
                                            invfoto:inv.Foto,invkontakti:inv.Kontakti})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteInvestitoret(inv.Investitoret_ID)}>
                                                Delete
                                            </Button>

                                            <EditInvestitoretModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            invid={invid}
                                            invemri={invemri}
                                            invmbiemri={invmbiemri}
                                            invpershkrimi={invpershkrimi}
                                            invfoto={invfoto}
                                            invkontakti={invkontakti}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Investitoret
                    </Button>

                    <AddInvestitoretModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddInvestitoretModal>
                </ButtonToolbar>
            </div>
        )
    }
}