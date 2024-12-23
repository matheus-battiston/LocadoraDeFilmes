import { axiosInstance } from '../_base/axiosInstance';

export async function alugarFilme(id, responsavel) {
  const response = await axiosInstance
    .put(`/${id}/alugar`, { responsavel: responsavel })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
