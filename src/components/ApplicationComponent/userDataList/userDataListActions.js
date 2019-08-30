import { userListActionType } from '../../../constants/actionType';
import { baseAPIConfig,userAPIConfig,RequestPayload } from '../../../apiConfig';
import { getData } from '../../../services/api/baseApiServices';
import { async } from 'q';

const actions = {
    AddUserDetails: (payload) => (
        {
            type: userListActionType.ADD_USERLIST,
            data: payload
        }
    ),
    DeleteUserDetails: (payload) => (
        {
            type: userListActionType.UPDATE_USERLIST,
            data: payload
        }
    ),
    UpdateUserDetails: (payload) => (
        {
            type: userListActionType.DELETE_USERLIST,
            data: payload
        }
    ),
    FetchUserDetails: (payload) => (
        {
            type: userListActionType.FETCH_USERLIST,
            data: payload
        }
    )
  
};

export const AddUserDetails = (data) => (dispatch, getstate) => {
    dispatch(actions.AddUserDetails(data));
};

export const FetchUserDetails = () => async (dispatch, getstate) => {
    const url = baseAPIConfig.baseUrl+userAPIConfig.userlist;
    const params={};
    const requestPayload = new RequestPayload(params);
    const response = await getData(url, requestPayload).catch(error => {
         console.log('data error');
        });
        if(response){
            dispatch(actions.FetchUserDetails(response));          
        }
};

