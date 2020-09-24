import request from '../lib/ajax';


export const getTeacherList = (params) => request.post('/teacherUserManage/getTeacherList', params);