
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddUserModal} from './AddUsersModal';
import {EditUserModal} from './EditUsersModal';

export class Users extends Component{

    constructor(props){
        super(props);
        this.state={usrs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'users')
        .then(response=>response.json())
        .then(data=>{
            this.setState({usrs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteUsers(usrid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Users/'+usrid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){

        const {usrs, usremri, usrid, usrmbiemri, usremail, 
            usrusername,usrpasswordi, usrroli, usrfoto, usrpershkrimi} =this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="container" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Passwordi</th>
                            <th>Mosha</th>
                            <th>VitiLindjes</th>
                            <th>UserType</th>
                            <th>Roli</th>
                            <th>Foto</th>
                            <th>Pershkrimi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usrs.map(usr=>
                            <tr key={usr.ID}>
                                <td>{usr.ID}</td>
                                <td>{usr.Emri}</td>
                                <td>{usr.Mbiemri}</td>
                                <td>{usr.Email}</td>
                                <td>{usr.Username}</td>
                                <td>{usr.Passwordi}</td>
                                <td>{usr.Mosha}</td>
                                <td>{usr.VitiLindjes}</td>
                                <td>{usr.UserType}</td>
                                <td>{usr.Roli}</td>
                                <td>{usr.Foto}</td>
                                <td>{usr.Pershkrimi}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                            usrid:usr.ID,usremri:usr.Emri,usrmbiemri:usr.Mbiemri,usremail:usr.Email,
                                            usrusername:usr.Username,usrpasswordi:usr.Passwordi,usrmosha:usr.Mosha,usrvitilindjes:usr.VitiLindjes,
                                            usrusertype:usr.UserType,usrroli:usr.Roli, usrfoto:usr.Foto, usrpershkrimi:usr.Pershkrimi})}>
                                                Edit
                                            </Button>

                                            <Button className="mr-2" variant="danger"
                                            onClick={()=>this.deleteUsers(usr.ID)}>
                                                Delete
                                            </Button>

                                            <EditUserModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            usrid={usrid}
                                            usremri={usremri}
                                            usrmbiemri={usrmbiemri}
                                            usremail={usremail}
                                            usrusername={usrusername}
                                            usrpasswordi={usrpasswordi}
                                            usrroli={usrroli}
                                            usrfoto={usrfoto}
                                            usrpershkrimi={usrpershkrimi}/>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Add User
                    </Button>

                    <AddUserModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddUserModal>
                </ButtonToolbar>
            </div>
        )
    }
}