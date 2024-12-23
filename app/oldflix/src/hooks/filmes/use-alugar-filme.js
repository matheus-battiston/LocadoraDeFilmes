import { useEffect, useState } from 'react';
import { alugarFilme } from '../../api/filmes/alugar-filme';
import { useToastr } from '../toastr/use-toastr';
export function useAlugarFilme() {
  const [aluguel, setAluguel] = useState(null);
  const [statusAluguel, setStatusAluguel] = useState(true);
  const toastr = useToastr();

  useEffect(() => {
    if (aluguel) {
      alugarFilme(aluguel.id, aluguel.responsavel)
        .then(() => {
          setStatusAluguel(true);
        })
        .catch((error) => {
          toastr({ message: error.message });
        })
        .finally(() => {
          setStatusAluguel(false);
          setAluguel(null);
        });
    }
  }, [aluguel]);

  return {
    setAluguel: setAluguel,
    statusAluguel: statusAluguel,
  };
}
