import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,FormGroup,Label,Input } from 'reactstrap';
import SlideModal from '../../Base/SlideModal/slideModal.js';
import { getlocalizeData } from '../../../utils/commonUtils';
import ReactTable from "react-table";
import "react-table/react-table.css";
const localConstant = getlocalizeData();
const ModalFrom =(props)=>{
  debugger;
  return(
    <Card>
              <CardHeader>
                <strong>Company</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Enter your company name" value={props.name}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">VAT</Label>
                  <Input type="text" id="vat" placeholder="DE1234567890" value={props.email} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name" />
                </FormGroup>
              </CardBody>
            </Card>
  )
}

class UserDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false
        };
        this.updatedData = {};
        this.selectedRowData={}; 
        this.handleEdit = this.handleEdit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this);     
    }
    //Onclick Handler    
    handleEdit=(data)=>{ 
      debugger;  
      console.log(data);
      this.setState({isModalOpen:!this.state.isModalOpen});
      this.selectedRowData = data;
    }
    handleDelete=(data)=>{
      console.log(data);
    }
    render() {       
        const { userDataList } = this.props;
        return (           
        <div className="animated fadeIn">
          <SlideModal isModalOpen={this.state.isModalOpen} toggleModal={()=>this.handleEdit()}>
          <ModalFrom {...this.selectedRowData}/>
          </SlideModal>
         <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                {localConstant.userList.pageTitle}
              </CardHeader>
               <CardBody>

             <ReactTable
                data={userDataList}
                columns={[
                    {
                      Header: "First Name",
                      accessor: "name",
                     
                    },
                    {
                      Header: "User",
                      accessor: "username",
                     
                    },
                    {
                      Header: "Email",
                      accessor: "email",
                     
                    },
                    {
                      Header: "Phone",
                      accessor: "phone",
                     
                    },
                    {
                      Header: "WebSite",
                      accessor: "website",
                     
                    },
                    {
                    Header:'Action',
                    Cell:link =>(<><button onClick={()=>this.handleEdit(link.original)}>Edit</button> <button onClick={()=>this.handleEdit(link.original)}>Delete</button></>)
                    }
                    
                  ]}
                  defaultPageSize={10}
        />
              </CardBody>
            </Card>
          </Col>
          </Row>
          </div>
        );
    }
    componentDidMount(){
      this.props.actions.FetchUserDetails();
    }
}
export default UserDataList;