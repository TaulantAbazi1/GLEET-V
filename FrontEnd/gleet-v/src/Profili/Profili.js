
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {EditProfiliModal} from '../Profili/EditProfiliModal';


export class Profili extends Component{

    constructor(props){
        super(props);
        this.state={pro:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Profili')
        .then(response=>response.json())
        .then(data=>{
            this.setState({pro:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

   

    render(){

        const {pro, pr, premri, prmbiemri, prpasswordi, prmosha, prvitilindjes,
            prfoto,prpershkrimi, prid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Passwordi</th>
                            <th>Foto</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pro.map(pr=>
                            <tr key={pr.ID}>
                                <td>{pr.ID}</td>
                                <td>{pr.Emri}</td>
                                <td>{pr.Mbiemri}</td>
                                <td>{pr.Passwordi}</td>
                                <td>{pr.Foto}</td>
                                <td>{pr.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            prid:pr.ID,premri:pr.Emri,prmbiemri:pr.Mbiemri,prpasswordi:pr.Passwordi,
                                             prfoto:pr.Foto, 
                                            prpershkrimi:pr.Pershkrimi })}>
                                                Edit 
                                            </Button>

                                           

                                            <EditProfiliModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            prid={prid}
                                            premri={premri}
                                            prmbiemri={prmbiemri}
                                            prpasswordi={prpasswordi}
                                            prfoto={prfoto}
                                            prpershkrimi={prpershkrimi}
                                            />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

               
               
            </div>
        )
    }
}