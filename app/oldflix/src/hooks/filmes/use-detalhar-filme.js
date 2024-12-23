import { useEffect, useState } from 'react';
import { getDetalheFilme } from '../../api/filmes/get-detalhe-filme';
import { useToastr } from '../toastr/use-toastr';
export function useDetalharFilme() {
  const [id, setId] = useState(null);
  const [filme, setFilme] = useState(null);
  const [estado, setEstado] = useState(false);
  const toastr = useToastr();

  function detalharFilme() {
    getDetalheFilme(id)
      .then((res) => setFilme(res))
      .catch((error) => {
        toastr({ message: error.message });
      });
  }

  function update() {
    setEstado(!estado);
  }

  useEffect(() => {
    if (id) {
      detalharFilme();
    }
  }, [id, estado]);

  return {
    filme: filme,
    update: update,
    setId: setId,
  };
}
