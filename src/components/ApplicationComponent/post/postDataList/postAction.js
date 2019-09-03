import { postActionType } from '../../../../constants/actionType';
import { baseAPIConfig,postAPIConfig,RequestPayload } from '../../../../apiConfig';
import { getData,postData } from '../../../../services/api/baseApiServices';
import { async } from 'q';

const actions = {
    AddPostDetails: (payload) => (
        {
            type: postActionType.ADD_POSTLIST,
            data: payload
        }
    ),
    DeletePostDetails: (payload) => (
        {
            type: postActionType.UPDATE_POSTLIST,
            data: payload
        }
    ),
    UpdatePostDetails: (payload) => (
        {
            type: postActionType.DELETE_POSTLIST,
            data: payload
        }
    ),
    FetchPosts: (payload) => (
        {
            type: postActionType.FETCH_POSTLIST,
            data: payload
        }
    ),
    FetchPostDetails: (payload) => (
        {
            type: postActionType.FETCH_POSTDETAILS,
            data: payload
        }
    ),
    FetchComments: (payload) => (
        {
            type: postActionType.FETCH_COMMENTS,
            data: payload
        }
    ),
    PostComments: (payload) => (
        {
            type: postActionType.POST_COMMENTS,
            data: payload
        }
    )
  
  
};

export const AddPostDetails = (data) => (dispatch, getstate) => {
    dispatch(actions.AddUserDetails(data));
};

export const FetchPosts = () => async (dispatch, getstate) => {
    const url = baseAPIConfig.baseUrl+postAPIConfig.posts;
    const params={};
    const requestPayload = new RequestPayload(params);
    const response = await getData(url, requestPayload).catch(error => {
         console.log('data error');
        });
        if(response){
            dispatch(actions.FetchPosts(response));          
        }
};
export const FetchPostDetails = (id) => async (dispatch, getstate) => {
    const url = baseAPIConfig.baseUrl+postAPIConfig.posts+'/'+id;
    const params={};
    const requestPayload = new RequestPayload(params);
    const response = await getData(url, requestPayload).catch(error => {
         console.log('data error');
        });
        if(response){
            dispatch(actions.FetchPostDetails(response));          
        }
    return response;
};
export const FetchComments = (id) => async (dispatch, getstate) => {
    const url = baseAPIConfig.baseUrl+postAPIConfig.posts+'/'+id+'/'+postAPIConfig.comments;
    const params={};
    const requestPayload = new RequestPayload(params);
    const response = await getData(url, requestPayload).catch(error => {
         console.log('data error');
        });
        if(response){
            dispatch(actions.FetchComments(response));          
        }
};
export const PostComments = (data) => async (dispatch, getstate) => {
    const url = baseAPIConfig.baseUrl+postAPIConfig.posts;
    const params={
        id:data.id,
        title:data.title,
        body:data.comments};
    const requestPayload = new RequestPayload(params);
    const response = await postData(url, requestPayload).catch(error => {
         console.log('data error');
        });
        debugger;
        if(response.data){
           //dispatch(actions.FetchComments(response));
           alert('Save Success');          
        }
};

