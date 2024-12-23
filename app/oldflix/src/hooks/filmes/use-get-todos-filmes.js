import { useEffect, useState } from 'react';
import { getTodosFilmes } from '../../api/filmes/get-todos-filmes';
import { useToastr } from '../toastr/use-toastr';
export function useGetTodosOsFilmes() {
  const [filmes, setFilmes] = useState(null);
  const [loading, setLoading] = useState(true);
  const toastr = useToastr();

  function todosOsFilme() {
    getTodosFilmes()
      .then((res) => setFilmes(res))
      .catch((error) => {
        toastr({ message: error.message });
      })
      .finally(setLoading(false));
  }

  useEffect(() => {
    todosOsFilme();
  }, []);

  function update() {
    todosOsFilme();
  }

  return {
    filmes: filmes,
    update: update,
    loading: loading,
  };
}
