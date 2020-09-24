import request from '../lib/ajax';


export const getStudentList = (params) => request.post('/studentUserManage/getStudentList', params);