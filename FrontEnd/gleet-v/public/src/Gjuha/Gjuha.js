


import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddGjuhaModal} from './AddGjuhaModal';
import {EditGjuhaModal} from './EditGjuhaModal';

export class Gjuha extends Component{

    constructor(props){
        super(props);
        this.state={gjs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Gjuha')
        .then(response=>response.json())
        .then(data=>{
            this.setState({gjs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteGjuha(gjid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Gjuha/'+gjid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {gjid,gjemrigjuhes,gjs, gjpershkrimigjuhes}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Gjuha_ID</th>
                        <th>EmriGjuhes</th>
                        <th>PershkrimiGjuhes</th>

                        </tr>
                    </thead>
                    <tbody>

                        {gjs.map(gj=>
                            <tr key={gj.Gjuha_ID}>
                                <td>{gj.Gjuha_ID}</td>
                                <td>{gj.EmriGjuhes}</td>
                                <td>{gj.PershkrimiGjuhes}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        gjid:gj.Gjuha_ID,gj:gj.EmriGjuhes, gj:gj.PershkrimiGjuhes})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteGjuha(gj.Gjuha_ID)}>
            Delete
        </Button>

        <EditGjuhaModal show={this.state.editModalShow}
        onHide={editModalClose}
        gjid={gjid}
        gjemrigjuhes={gjemrigjuhes}
        gjpershkrimigjuhes={gjpershkrimigjuhes}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Gjuha</Button>

                    <AddGjuhaModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}