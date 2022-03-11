

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddReturnTModal} from './AddReturnTModal';
import {EditReturnTModal} from './EditReturnTModal';

export class ReturnT extends Component{

    constructor(props){
        super(props);
        this.state={ret:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ReturnT')
        .then(response=>response.json())
        .then(data=>{
            this.setState({ret:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteReturnT(reid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'ReturnT/'+reid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {ret, rereturntime, rereturndate, reid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ReturnT_ID</th>
                            <th>ReturnTime</th>
                            <th>ReturnDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ret.map(re=>
                            <tr key={re.ReturnT_ID}>
                                <td>{re.ReturnT_ID}</td>
                                <td>{re.ReturnTime}</td>
                                <td>{re.ReturnDate}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            reid:re.ReturnT_ID,rereturntime:re.ReturnTime,rereturndate:re.ReturnDate})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteReturnT(re.ReturnT_ID)}>
                                                Delete
                                            </Button>

                                            <EditReturnTModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            reid={reid}
                                            rereturntime={rereturntime}
                                            rereturndate={rereturndate}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add ReturnT
                    </Button>

                    <AddReturnTModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddReturnTModal>
                </ButtonToolbar>
            </div>
        )
    }
}