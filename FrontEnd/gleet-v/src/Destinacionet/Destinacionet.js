import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDestinacionetModal} from './AddDestinacionetModal';
import {EditDestinacionetModal} from './EditDestinacionetModal';

export class Destinacionet extends Component{

    constructor(props){
        super(props);
        this.state={destinacionett:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Destinacionet')
        .then(response=>response.json())
        .then(data=>{
            this.setState({destinacionett:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteMakina(destinacionetid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Destinacionet/'+destinacionetid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {destinacionett, destinacionetid, destinacionetemri, destinacionetlogo, destinacionetbanner, 
            destinacionetpershkrimi} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Destinacionet_ID</th>
                            <th>Emri</th>
                            <th>Logo</th>
                            <th>Banner</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {destinacionett.map(destinacionet=>
                            <tr key={destinacionet.Destinacionet_ID}>
                                <td>{destinacionet.Destinacionet_ID}</td>
                                <td>{destinacionet.Emri}</td>
                                <td>{destinacionet.Logo}</td>
                                <td>{destinacionet.Banner}</td>
                                <td>{destinacionet.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            destinacionetid:destinacionet.Destinacionet_ID,destinacionetemri:destinacionet.Emri,destinacionetlogo:destinacionet.Logo,destinacionetbanner:destinacionet.Banner,
                                            destinacionetpershkrimi:destinacionet.Pershkrimi})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteMakina(destinacionet.Destinacionet_ID)}>
                                                Delete
                                            </Button>

                                            <EditDestinacionetModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            destinacionetid={destinacionetid}
                                            destinacionetemri={destinacionetemri}
                                            destinacionetlogo={destinacionetlogo}
                                            destinacionetbanner={destinacionetbanner}
                                            destinacionetpershkrimi={destinacionetpershkrimi}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Destinacionet
                    </Button>

                    <AddDestinacionetModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddDestinacionetModal>
                </ButtonToolbar>
            </div>
        )
    }
}