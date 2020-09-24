import request from '../lib/ajax';


export const login = (params) => request.post('/userManage/login', params);