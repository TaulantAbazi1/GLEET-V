
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddFuelUpModal} from './AddFuelUpModal';
import {EditFuelUpModal} from './EditFuelUpModal';

export class FuelUp extends Component{

    constructor(props){
        super(props);
        this.state={fuu:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'FuelUp')
        .then(response=>response.json())
        .then(data=>{
            this.setState({fuu:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){

        const {fuu, fuperqindja, fuid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Fuel_ID</th>
                            <th>Perqindja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fuu.map(fu=>
                            <tr key={fu.Fuel_ID}>
                                <td>{fu.Fuel_ID}</td>
                                <td>{fu.Perqindja}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            fuid:fu.Fuel_ID,fuperqindja:fu.Perqindja})}>
                                                Edit
                                            </Button>

                                            <EditFuelUpModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            fuid={fuid}
                                            fuperqindja={fuperqindja}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Fuel
                    </Button>

                    <AddFuelUpModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddFuelUpModal>
                </ButtonToolbar>
            </div>
        )
    }
}