import axios from 'axios';
import { configuration } from '../../appConfig';

axios.defaults.baseURL = configuration.apiBaseUrl;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Access-Control-Allow-Origin']= '*';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Acces-Control-Allow-Origin'] = '*';

axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.put['Accept'] = 'application/json';
axios.defaults.headers.put['Acces-Control-Allow-Origin'] = '*';
//Post Method
const param = {}
/**
* @param {*} url 
* @param {*} config 
*/
export const postData = async (url, config) => {
    axios.post(url, config.data)
        .then((response) => {
            if (response && response.status === 200 && response.statusText === 'OK') {
                console.log(response);
                return response.result;
            }

        }, (error) => {
            console.log(error);
            return error;
        });
}
/**
* @param {*} url 
* @param {*} config 
*/
export const getData = async (url, config) => {
    const response = await axios.get(url, { param: config.data })
        .then((response) => {
            if (response && response.status === 200) {
                console.log(response);
                return response.data;
            }

        }, (error) => {
            console.log(error);
            return error;
        });
    return response;
}
