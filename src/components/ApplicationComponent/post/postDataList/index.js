import PostDataList from './postDataList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmptyReturnDefault } from '../../../../utils/commonUtils';
import { FetchPosts,FetchPostDetails,FetchComments } from './postAction';
const mapStateToProps = (state, props) => { 
    return {
     postDataList:isEmptyReturnDefault(state.rootApplicationReducer.PostReducer.postDataList),       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
               
                FetchPosts,
                FetchPostDetails,
                FetchComments
            },
            dispatch
        ),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDataList));