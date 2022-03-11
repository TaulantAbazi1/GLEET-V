

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';

import {AddSherbimiModal} from './AddSherbimetModal';
import {EditSherbimetModal} from './EditSherbimetModal';


export class Sherbimet extends Component{

    constructor(props){
        super(props);
        this.state={Sherbimet:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'sherbimet')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Sherbimet:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSherbimet(sherid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'sherbimet/'+sherid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {Sherbimet, sherid, sherfoto, sheremri, sherpershkrimi} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="container" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Sherbimi_ID</th>
                            <th>Emri</th>
                            <th>Pershkrimi</th>
                            <th>Foto</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Sherbimet.map(sher=>
                            <tr key={sher.Sherbimi_ID}>
                                <td>{sher.Sherbimi_ID}</td>
                                <td>{sher.Emri}</td>
                                <td>{sher.Pershkrimi}</td>
                                <td>{sher.Foto}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            sherid:sher.Sherbimi_ID,sheremri:sher.Emri,sherpershkrimi:sher.Pershkrimi,sherfoto:sher.Foto})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteSherbimet(sher.Sherbimi_ID)}>
                                                Delete
                                            </Button>

                                            <EditSherbimetModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            sherid={sherid}
                                            sheremri={sheremri}
                                            sherpershkrimi={sherpershkrimi}
                                            sherfoto={sherfoto}
                                          />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Pershkrimi
                    </Button>

                    <AddSherbimiModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddSherbimiModal>
                </ButtonToolbar>
            </div>
        )
    }
}