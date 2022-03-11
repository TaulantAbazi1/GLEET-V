

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCustomerSupportModal} from './AddCustumerSupportModal';

export class CustomerSupport extends Component{

    constructor(props){
        super(props);
        this.state={css:[], addModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'CustomerSupport')
        .then(response=>response.json())
        .then(data=>{
            this.setState({css:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteCustomerSupport(csid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'CustomerSupport/'+csid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {css, csemri, csmbiemri, csnr_tel,
            csid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>CustomerSupport_ID</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Nr_Tel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {css.map(cs=>
                            <tr key={cs.CustomerSupport_ID}>
                                <td>{cs.CustomerSupport_ID}</td>
                                <td>{cs.Emri}</td>
                                <td>{cs.Mbiemri}</td>
                                <td>{cs.Nr_Tel}</td>
                                <td>
                                    <ButtonToolbar>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteCustomerSupport(cs.CustomerSupport_ID)}>
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
                        Add Customer Support
                    </Button>

                    <AddCustomerSupportModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddCustomerSupportModal>
                </ButtonToolbar>
            </div>
        )
    }
}