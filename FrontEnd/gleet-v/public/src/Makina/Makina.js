

import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMakinaModal} from './AddMakinaModal';
import {EditMakinaModal} from './EditMakinaModal';

export class Makina extends Component{

    constructor(props){
        super(props);
        this.state={maks:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Makina')
        .then(response=>response.json())
        .then(data=>{
            this.setState({maks:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteMakina(makid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Makina/'+makid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {maks, makbrandi, makngjyra, makmodeli, makklasa, 
            makkarburanti,makviti,makid} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Makina_ID</th>
                            <th>Brandi</th>
                            <th>Modeli</th>
                            <th>Ngjyra</th>
                            <th>Karburanti</th>
                            <th>Viti</th>
                            <th>Klasa</th>
                            <th>Foto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {maks.map(mak=>
                            <tr key={mak.Makina_ID}>
                                <td>{mak.Makina_ID}</td>
                                <td>{mak.Brandi}</td>
                                <td>{mak.Modeli}</td>
                                <td>{mak.Ngjyra}</td>
                                <td>{mak.Karburanti}</td>
                                <td>{mak.Viti}</td>
                                <td>{mak.Klasa}</td>
                                <td><img src='images/img-9.jpg'></img></td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            makid:mak.Makina_ID,makbrandi:mak.Brandi,makmodeli:mak.Modeli,makngjyra:mak.Ngjyra,
                                            makkarburanti:mak.Karburanti,makviti:mak.Viti,makklasa:mak.Klasa})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteMakina(mak.Makina_ID)}>
                                                Delete
                                            </Button>

                                            <EditMakinaModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            makid={makid}
                                            makbrandi={makbrandi}
                                            makmodeli={makmodeli}
                                            makngjyra={makngjyra}
                                            makkarburanti={makkarburanti}
                                            makviti={makviti}
                                            makklasa={makklasa}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add Makina
                    </Button>

                    <AddMakinaModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddMakinaModal>
                </ButtonToolbar>
            </div>
        )
    }
}