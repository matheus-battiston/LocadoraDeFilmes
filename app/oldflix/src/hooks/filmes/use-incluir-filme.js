import { useEffect, useState } from 'react';
import { incluirFilme } from '../../api/filmes/incluir-filme';
import { useToastr } from '../toastr/use-toastr';
export function useIncluirFilme() {
  const [inclusao, setInclusao] = useState(null);
  const [statusInclusao, setStatusInclusao] = useState(false);
  const toastr = useToastr();

  useEffect(() => {
    if (inclusao) {
      incluirFilme(inclusao)
        .then(setStatusInclusao(true))
        .catch((error) => {
          toastr({ message: error.message });
        })
        .finally(() => {
          setInclusao(null);
        });
    }
  }, [inclusao]);

  return {
    setInclusao: setInclusao,
    statusInclusao: statusInclusao,
  };
}
