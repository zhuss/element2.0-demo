import axios from 'axios'

axios.interceptors.response.use((res) => {
    return res.data || res;
  }, (error) => {
    return Promise.reject(error);
  });

function postAjax(url,params){
    return axios.post(url,{
        source: 'h5',
        userId: localStorage.getItem('userId'),
        sid: localStorage.getItem('sid'),
        data: params
        },{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
}

var BASEURL = 'http://passport-dev.bunny-tech.com:30010';

export default {
    //登录
    login(data){
        return postAjax(BASEURL+'/v1/passport/login',data);
    },
    //验证ticket是否有效
    verifyTicket(data) {
        return postAjax(BASEURL + '/v1/passport/ticket/verify', data)
    }
}