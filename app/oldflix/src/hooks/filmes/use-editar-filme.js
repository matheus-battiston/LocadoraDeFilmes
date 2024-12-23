import { useEffect, useState } from 'react';
import { editarFilme } from '../../api/filmes/editar-filme';
import { useToastr } from '../toastr/use-toastr';
export function useEditarFilme() {
  const [camposEdicao, setCamposEdicao] = useState(null);
  const [statusEdicao, setStatusEdicao] = useState(false);
  const toastr = useToastr();

  useEffect(() => {
    if (camposEdicao) {
      editarFilme(camposEdicao.id, camposEdicao.campos)
        .then(() => {
          console.log('TA NO THEN');
          setStatusEdicao(true);
        })
        .catch((error) => {
          toastr({ message: error.message });
        })
        .finally(() => {
          setCamposEdicao(null);
        });
    }
  }, [camposEdicao]);

  return {
    setCamposEdicao: setCamposEdicao,
    statusEdicao: statusEdicao,
  };
}
