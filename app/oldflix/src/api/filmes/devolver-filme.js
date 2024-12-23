import { axiosInstance } from '../_base/axiosInstance';

export async function devolverFilme(id) {
  const response = await axiosInstance
    .put(`/${id}/devolver`)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
