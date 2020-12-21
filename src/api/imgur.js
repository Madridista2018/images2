//抽象出和imgur api交互的部分,https://apidocs.imgur.com/#authorization-and-oauth
import qs from 'qs';


const CLIENT_ID='93ee23c1e91b6d4';
const ROOT_URL='https://api.imgur.com'


export default{
    login(){
        //用qs库
        const querystring = {
            client_id : CLIENT_ID,
            response_type : 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    }
};