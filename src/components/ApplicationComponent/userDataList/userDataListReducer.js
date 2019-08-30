import { userListActionType } from '../../../constants/actionType';
const initialState={
        userDataList:[]
}
export const UserDataListReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case userListActionType.ADD_USERLIST:
            state = {
                ...state,
                userDataList:data              
            };
            return state;
      
        case userListActionType.UPDATE_USERLIST:
            state = {
                ...state,
               
            };
            return state;
        
        case userListActionType.DELETE_USERLIST:
                state = {
                    ...state,              
                };
                return state;
        case userListActionType.FETCH_USERLIST:
            state = {
                ...state,
                userDataList:data
            };
            return state;
        default:
            return state;
    }
};
