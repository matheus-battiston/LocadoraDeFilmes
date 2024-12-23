import { axiosInstance } from '../_base/axiosInstance';

export async function getDetalheFilme(id) {
  const response = await axiosInstance
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
