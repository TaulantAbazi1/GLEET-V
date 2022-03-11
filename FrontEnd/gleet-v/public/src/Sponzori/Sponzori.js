

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSponzoriModal} from './AddSponzoriModal';
import {EditSponzoriModal} from './EditSponzoriModal';

export class Sponzori extends Component{

    constructor(props){
        super(props);
        this.state={spo:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Sponzorat')
        .then(response=>response.json())
        .then(data=>{
            this.setState({spo:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSponzori(spid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Sponzorat/'+spid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {spo, spemrisponzorit, splogo, spbanner, sppershkrimisponzorit, spid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Sponzori_ID</th>
                            <th>EmriSponzorit</th>
                            <th>Logo</th>
                            <th>Banner</th>
                            <th>PershkrimiSponzorit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spo.map(sp=>
                            <tr key={sp.Sponzori_ID}>
                                <td>{sp.Sponzori_ID}</td>
                                <td>{sp.EmriSponzorit}</td>
                                <td>{sp.Logo}</td>
                                <td>{sp.Banner}</td>
                                <td>{sp.PershkrimiSponzorit}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            spid:sp.Sponzori_ID,spemrisponzorit:sp.EmriSponzorit,splogo:sp.Logo,spbanner:sp.Banner,
                                            sppershkrimisponzorit:sp.PershkrimiSponzorit})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteSponzori(sp.Sponzori_ID)}>
                                                Delete
                                            </Button>

                                            <EditSponzoriModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            spid={spid}
                                            spemrisponzorit={spemrisponzorit}
                                            splogo={splogo}
                                            spbanner={spbanner}
                                            sppershkrimisponzorit={sppershkrimisponzorit}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Sponzori
                    </Button>

                    <AddSponzoriModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddSponzoriModal>
                </ButtonToolbar>
            </div>
        )
    }
}