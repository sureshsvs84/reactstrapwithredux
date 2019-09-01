import PostDataDetails from './postDataDetails';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmptyReturnDefault } from '../../../../utils/commonUtils';
import { FetchPostDetails,FetchComments } from '../postDataList/postAction';
const mapStateToProps = (state, props) => { 
    return {
     postDataDetails:isEmptyReturnDefault(state.rootApplicationReducer.PostReducer.postDataDetails), 
     postDetailsComments:isEmptyReturnDefault(state.rootApplicationReducer.PostReducer.postDetailsComments)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                FetchPostDetails,
                FetchComments
            },
            dispatch
        ),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDataDetails));