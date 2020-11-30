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