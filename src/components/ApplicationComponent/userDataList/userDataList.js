import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { getlocalizeData } from '../../../utils/commonUtils';
import ReactTable from "react-table";
import "react-table/react-table.css";
const localConstant = getlocalizeData();

class UserDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updatedData = {};      
    }
    componentDidMount(){
        this.props.actions.FetchUserDetails();
    }
    render() {       
        const { userDataList } = this.props;
        return (           
        <div className="animated fadeIn">
         <Row>
          <Col xs="12" sm="12" md="12">
            <Card>
              <CardHeader>
                {localConstant.userList.pageTitle}
              </CardHeader>
               <CardBody>

             <ReactTable
                data={this.props.userDataList}
                columns={[
                    {
                      Header: "First Name",
                      accessor: "name",
                      minWidth: 300
                    },
                    {
                      Header: "User",
                      accessor: "username",
                      minWidth: 300
                    },
                    {
                      Header: "Email",
                      accessor: "email",
                      minWidth: 300
                    },
                    {
                      Header: "Phone",
                      accessor: "phone",
                      minWidth: 300
                    },
                    {
                      Header: "WebSite",
                      accessor: "website",
                      minWidth: 300
                    }
                  ]}
        
        />
              </CardBody>
            </Card>
          </Col>
          </Row>
          </div>
        );
    }
}
export default UserDataList;