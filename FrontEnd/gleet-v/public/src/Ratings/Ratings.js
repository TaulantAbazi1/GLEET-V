
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddRatingsModal} from './AddRatingsModal';
import {EditRatingsModal} from './EditRatingsModal';

export class Ratings extends Component{

    constructor(props){
        super(props);
        this.state={rats:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Ratings')
        .then(response=>response.json())
        .then(data=>{
            this.setState({rats:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteRatings(ratid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Ratings/'+ratid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {rats, ratpershkrimi, ratvlersimi, ratid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Ratings_ID</th>
                            <th>Pershkrimi</th>
                            <th>Vlersimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rats.map(rat=>
                            <tr key={rat.Ratings_ID}>
                                <td>{rat.Ratings_ID}</td>
                                <td>{rat.Pershkrimi}</td>
                                <td>{rat.Vlersimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            ratid:rat.Ratings_ID,ratpershkrimi:rat.Pershkrimi,ratvlersimi:rat.Vlersimi})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteRatings(rat.Ratings_ID)}>
                                                Delete
                                            </Button>

                                            <EditRatingsModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            ratid={ratid}
                                            ratpershkrimi={ratpershkrimi}
                                            ratvlersimi={ratvlersimi}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Rating
                    </Button>

                    <AddRatingsModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddRatingsModal>
                </ButtonToolbar>
            </div>
        )
    }
}