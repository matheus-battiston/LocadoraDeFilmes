import { axiosInstance } from '../_base/axiosInstance';

export async function incluirFilme(request) {
  const response = await axiosInstance
    .post('', {
      titulo: request.titulo,
      descricao: request.descricao,
      url_poster: request.url_poster,
      categoria: request.categoria,
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
