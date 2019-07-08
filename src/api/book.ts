import http from '@/utils/http';
export const getBookList = (data: any, config: any) => {
    return http.post('book/list', data, config);
};
