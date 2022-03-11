import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMirmbajtjaModal} from './AddMirmbajtjaModal';
import {EditMirmbajtjaModal} from './EditMirmbajtjaModal';

export class Mirmbajtja extends Component{

    constructor(props){
        super(props);
        this.state={mirm:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Mirmbajtja')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mirm:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteMirmbajtja(mirid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Mirmbajtja/'+mirid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {mirm, miragjenda, mirllojimirmbajtjes, 
            mirvertetimi,mirpershkrimi,mirid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Mirmbajtja_ID</th>
                            <th>Agjenda</th>
                            <th>LlojiMirmbajtjes</th>
                            <th>Vertetimi</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mirm.map(mir=>
                            <tr key={mir.Mirmbajtja_ID}>
                                <td>{mir.Mirmbajtja_ID}</td>
                                <td>{mir.Agjenda}</td>
                                <td>{mir.LlojiMirmbajtjes}</td>
                                <td>{mir.Vertetimi}</td>
                                <td>{mir.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            mirid:mir.Mirmbajtja_ID,miragjenda:mir.Agjenda,mirllojimirmbajtjes:mir.LlojiMirmbajtjes,
                                            mirvertetimi:mir.Vertetimi,mirpershkrimi:mir.Pershkrimi})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteMirmbajtja(mir.Mirmbajtja_ID)}>
                                                Delete
                                            </Button>

                                            <EditMirmbajtjaModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            mirid={mirid}
                                            miragjenda={miragjenda}
                                            mirllojimirmbajtjes={mirllojimirmbajtjes}
                                            mirvertetimi={mirvertetimi}
                                            mirpershkrimi={mirpershkrimi}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Mirmbajtja
                    </Button>

                    <AddMirmbajtjaModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddMirmbajtjaModal>
                </ButtonToolbar>
            </div>
        )
    }
}