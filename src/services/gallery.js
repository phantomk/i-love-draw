import request from '../utils/request';

export async function query() {
  return request('/api/gallery');
}

export function rate(id, value) {
  return request(`/api/gallery/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(value),
  });
}
