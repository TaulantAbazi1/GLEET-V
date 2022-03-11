

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddAntaresimiModal} from './AddAntaresimiModal';
import {EditAntaresimiModal} from './EditAntaresimiModal';


export class Antaresimi extends Component{

    constructor(props){
        super(props);
        this.state={ant:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Antaresimi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({ant:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteAntaresimi(anid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Antaresimi/'+anid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {ant, anniveli,an, anid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Antaresimi_ID</th>
                            <th>Niveli</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ant.map(an=>
                            <tr key={an.Antaresimi_ID}>
                                 <td>{an.Antaresimi_ID}</td>
                                <td>{an.Niveli}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            anid:an.Antaresimi_ID,anniveli:an.Niveli})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteAntaresimi(an.Antaresimi_ID)}>
                                                Delete
                                            </Button>

                                            <EditAntaresimiModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            anid={anid}
                                            anniveli={anniveli}
                                            />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Antaresimi
                    </Button>

                    <AddAntaresimiModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddAntaresimiModal>
                </ButtonToolbar>
            </div>
        )
    }
}