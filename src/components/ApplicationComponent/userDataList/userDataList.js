import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { getlocalizeData } from '../../../utils/commonUtils';
const localConstant = getlocalizeData();

class UserDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updatedData = {};      
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          </Row>
          </div>
        );
    }
}
export default UserDataList;