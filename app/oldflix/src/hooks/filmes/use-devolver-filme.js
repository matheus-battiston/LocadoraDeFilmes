import { useEffect, useState } from 'react';
import { devolverFilme } from '../../api/filmes/devolver-filme';
import { useToastr } from '../toastr/use-toastr';
export function useDevolverFilme() {
  const [idFilme, setIdFilme] = useState(null);
  const [statusDevolucao, setStatusDevolucao] = useState(true);
  const toastr = useToastr();

  useEffect(() => {
    if (idFilme) {
      setStatusDevolucao(true);
      devolverFilme(idFilme)
        .then(() => {
          setStatusDevolucao(!statusDevolucao);
        })
        .catch((error) => {
          toastr({ message: error.message });
        })
        .finally(() => {
          setIdFilme(null);
          setStatusDevolucao(false);
        });
    }
  }, [idFilme]);

  return {
    setIdFilme: setIdFilme,
    statusDevolucao: statusDevolucao,
  };
}
