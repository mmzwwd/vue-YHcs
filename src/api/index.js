import request from '../utils/request';
import url from './path'
import { http } from './axios'

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export function logins (data) {
    return http(url.logins, data ,'POST')
}
export function uploadFileSingle (data) {
    return http(url.uploadFileSingle, data ,'POST')
}
export function esSearchPage (data) {
    return http(url.esSearchPage, data ,'POST')
}
export function wenxuanBook (data) {
    return http(url.wenxuanBook, data ,'GET')
}
