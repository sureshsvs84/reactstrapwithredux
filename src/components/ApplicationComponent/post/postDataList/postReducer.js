import { postActionType } from '../../../../constants/actionType';
const initialState={
        postDataList:[]
}
export const PostReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case postActionType.ADD_POSTLIST:
            state = {
                ...state,
                postDataList:data              
            };
            return state;
      
        case postActionType.UPDATE_POSTLIST:
            state = {
                ...state,
               
            };
            return state;
        
        case postActionType.DELETE_POSTLIST:
                state = {
                    ...state,              
                };
                return state;
        case postActionType.FETCH_POSTLIST:
            state = {
                ...state,
                postDataList:data
            };
            return state;
        case postActionType.FETCH_POSTDETAILS:
            state = {
                ...state,
                postDataDetails: data
            };
            return state;
        case postActionType.FETCH_COMMENTS:
            state = {
                ...state,
                postDetailsComments: data
            };
            return state;
        default:
            return state;
    }
};
