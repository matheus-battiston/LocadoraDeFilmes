import { axiosInstance } from '../_base/axiosInstance';

export async function getTodosFilmes() {
  const response = await axiosInstance
    .get()
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
  return response;
}
