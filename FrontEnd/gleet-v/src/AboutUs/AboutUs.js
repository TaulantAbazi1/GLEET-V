

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {EditAboutUsModal} from './EditAboutUsModal';

export class AboutUs extends Component{

    constructor(props){
        super(props);
        this.state={aus:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'AboutUs')
        .then(response=>response.json())
        .then(data=>{
            this.setState({aus:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){

        const {aus, aupershkrimi, auid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Pershkrimi_ID</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aus.map(au=>
                            <tr key={au.Pershkrimi_ID}>
                                <td>{au.Pershkrimi_ID}</td>
                                <td>{au.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            auid:au.Pershkrimi_ID,aupershkrimi:au.Pershkrimi})}>
                                                Edit
                                            </Button>

                                            <EditAboutUsModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            auid={auid}
                                            aupershkrimi={aupershkrimi}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}