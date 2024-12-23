import { axiosInstance } from '../_base/axiosInstance';

export async function deletarFilme(id) {
  const response = await axiosInstance
    .delete(`/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
