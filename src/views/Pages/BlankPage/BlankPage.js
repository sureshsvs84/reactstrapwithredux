import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class BlankPage extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">New Blank Page</h1>              
                <p className="text-muted float-left">The page you are looking for was Blank.</p>
              </div>
             
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlankPage;
