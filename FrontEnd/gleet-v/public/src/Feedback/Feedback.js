import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddFeedbackModal} from './AddFeedbackModal';

export class Feedback extends Component{

    constructor(props){
        super(props);
        this.state={feedb:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Feedback')
        .then(response=>response.json())
        .then(data=>{
            this.setState({feedb:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteFeedback(feedid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Feedback/'+feedid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {feedb, feedtitulli, feedkomenti, feedid,feedpershkrimi} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Feedback_ID</th>
                            <th>Titulli</th>
                            <th>Komenti</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedb.map(feed=>
                            <tr key={feed.Feedback_ID}>
                                <td>{feed.Feedback_ID}</td>
                                <td>{feed.Titulli}</td>
                                <td>{feed.Komenti}</td>
                                <td>{feed.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteFeedback(feed.Feedback_ID)}>
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
                        Add Feedback
                    </Button>

                    <AddFeedbackModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddFeedbackModal>
                </ButtonToolbar>
            </div>
        )
    }
}