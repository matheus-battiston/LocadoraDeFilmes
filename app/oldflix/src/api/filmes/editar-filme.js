import { axiosInstance } from '../_base/axiosInstance';

export async function editarFilme(id, camposAEditar) {
  console.log(camposAEditar);
  const response = await axiosInstance
    .put(`/${id}`, camposAEditar)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
