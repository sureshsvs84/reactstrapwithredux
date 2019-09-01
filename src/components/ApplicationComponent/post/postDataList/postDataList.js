import React, { Component,Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody,CardImg, CardTitle, CardText, CardFooter, CardHeader, Col, Row, Collapse, Fade,FormGroup,Label,Input } from 'reactstrap';
import SlideModal from '../../../Base/SlideModal/slideModal.js';
import { getlocalizeData,isEmpty } from '../../../../utils/commonUtils';
import ReactTable from "react-table";
import "react-table/react-table.css";
const localConstant = getlocalizeData();

class PostDataList extends Component {
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
    selectedPost=(data)=>{
      this.props.actions.FetchPostDetails(data);
    }
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {       
        const { postDataList } = this.props;
        return (           
        <div className="animated fadeIn">
         <Row>
         <Suspense fallback={this.loading()}/>
             {
                 !isEmpty(postDataList) && postDataList.map((postItem,i)=>
                    <Col xs="12" sm="4" md="3" key={i}>
                    <Card>
                      <Suspense fallback={this.loading()}/>
                      <CardImg top width="100%" src="https://via.placeholder.com/600/92c952" alt="Card image cap" />
                      <CardBody>
                      <CardTitle><h5>{postItem.title}</h5></CardTitle>
                      <CardText>{postItem.body}</CardText>
                      <CardText>
                         <small className="text-muted"><a href={'/CRUD/posts/'+postItem.id} onClick={()=>this.selectedPost(postItem.id)}>{'Readmore..'}</a> </small>
                      </CardText>
                      </CardBody>
                    </Card>
                    </Col>
                 
                ) 
             }
         
          </Row>
          </div>
        );
    }
    componentDidMount(){
      this.props.actions.FetchPosts();
    }
    
}
export default PostDataList;