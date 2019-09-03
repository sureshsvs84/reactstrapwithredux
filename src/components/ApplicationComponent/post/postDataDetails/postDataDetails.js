import React, { Component,Suspense } from 'react';
import { Badge, Card, CardBody,CardImg, CardTitle, CardText,Button,Form, CardFooter, CardHeader, Col, Row, Collapse, Fade,FormGroup,Label,Input } from 'reactstrap';
import SlideModal from '../../../Base/SlideModal/slideModal.js';
import { getlocalizeData,isEmpty } from '../../../../utils/commonUtils';
import ReactTable from "react-table";
import "react-table/react-table.css";
const localConstant = getlocalizeData();

class PostDataDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen:false
        };
        this.updatedData = {};
        this.selectedRowData={}; 
        this.handleEdit = this.handleEdit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);    
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
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;    
        this.setState({
          [name]: value
        });
      }
    handleSubmitComments=(e)=>{
      e.preventDefault();
      this.props.actions.PostComments(this.state);
    }
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {       
        const { postDataDetails,postDetailsComments } = this.props;
        return (           
        <div className="animated fadeIn">
         <Row>
         <Suspense fallback={this.loading()}/>
         <Col xs="12" sm="12" md="12">
                    <Card>
                      <Suspense fallback={this.loading()}/>
                      <CardImg top width="100%" height="400" src="https://via.placeholder.com/600/92c952" alt="Card image cap" />
                      <CardBody>
                      <CardTitle><h5>{postDataDetails.title}</h5></CardTitle>
                      <CardText>{postDataDetails.body}</CardText>
                      <CardText>
                         <small className="text-muted">{postDataDetails.userId} Last updated 3 mins ago</small>
                      </CardText>
                      </CardBody>
                    </Card>
                </Col>
                    <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                        <strong>Add Comments:</strong>
                        <small> Form</small>   
                       </CardHeader>
                       
                        <CardBody>
                        <Form onSubmit={this.handleSubmitComments}>
                            <FormGroup>
                                <Label htmlFor="company">Title</Label>
                                <Input type="text" id="Title" name='title' placeholder="Enter your Title" onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comments">Comments</Label>
                                <Input type="textarea" name="comments" id="comments" rows="9" onChange={this.handleInputChange}/>
                            </FormGroup>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </Form>
                        </CardBody>
                        </Card>
                    </Col>
                    {postDetailsComments.map((comments, i) =>
                        comments.postId === postDataDetails.userId ?
                            <Col xs="12" sm="12" md="12" key={i}>
                                <Card className="text-black">
                                    <CardHeader>
                                        <h5>{comments.name} - {comments.email}</h5>
                                    </CardHeader>
                                    <CardBody>
                                        {comments.body}
                                    </CardBody>
                                </Card>
                            </Col> : null
                    )}
         
          </Row>
          </div>
        );
    }
    componentDidMount(){
     debugger;
    
        this.props.actions.FetchPostDetails(this.props.match.params.id).then(res => {
            if (res) {
                this.props.actions.FetchComments(res.id);
            }
        });
    }
}
export default PostDataDetails;