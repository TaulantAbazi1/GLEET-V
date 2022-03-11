

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {EditToSModal} from './EditToSModal';

export class ToS extends Component{

    constructor(props){
        super(props);
        this.state={toss:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ToS')
        .then(response=>response.json())
        .then(data=>{
            this.setState({toss:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){

        const {toss, tosPershkrimiToS, tosid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>TOS_ID</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toss.map(tos=>
                            <tr key={tos.ToS_ID}>
                                <td>{tos.ToS_ID}</td>
                                <td>{tos.PershkrimiToS}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            tosid:tos.ToS_ID,tosPershkrimiToS:tos.PershkrimiToS})}>
                                                Edit
                                            </Button>

                                            <EditToSModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            tosid={tosid}
                                            tosPershkrimiToS={tosPershkrimiToS}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}