import { userListActionType } from '../../../constants/actionType';

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
    )
  
};

export const AddUserDetails = (data) => (dispatch, getstate) => {
    dispatch(actions.AddUserDetails(data));
};

