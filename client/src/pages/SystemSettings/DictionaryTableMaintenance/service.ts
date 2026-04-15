import request from '@/utils/request';

export async function fetchDictionaryList(params: {
  pageSize: number;
  pageNum: number;
  query: {
    type?: number;
    search?: string;
  };
}) {
  return request('/getDictionaryList', {
    method: 'GET',
    params,
  });
}
