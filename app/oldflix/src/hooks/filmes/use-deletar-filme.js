import { useEffect, useState } from 'react';
import { deletarFilme } from '../../api/filmes/remover-filme';
import { useToastr } from '../toastr/use-toastr';
export function useDeletarFilme() {
  const [idFilme, setIdFilme] = useState(null);
  const [statusRemocao, setStatusRemocao] = useState(false);
  const toastr = useToastr();

  useEffect(() => {
    if (idFilme) {
      setStatusRemocao(false);
      deletarFilme(idFilme)
        .then(() => {
          setStatusRemocao(true);
        })
        .catch((error) => {
          toastr({ message: error.message });
        })
        .finally(() => {
          setIdFilme(null);
        });
    }
  }, [idFilme]);

  return {
    setIdFilme: setIdFilme,
    statusRemocao: statusRemocao,
  };
}
