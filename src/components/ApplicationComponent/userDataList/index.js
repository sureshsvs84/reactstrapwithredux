import UserDataList from './userDataList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmptyReturnDefault } from '../../../utils/commonUtils';
import { AddUserDetails,FetchUserDetails } from './userDataListActions';
const mapStateToProps = (state, props) => { 
    return {
     userDataList:isEmptyReturnDefault(state.rootApplicationReducer.UserDataListReducer.userDataList),       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                AddUserDetails,
                FetchUserDetails
            },
            dispatch
        ),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDataList));