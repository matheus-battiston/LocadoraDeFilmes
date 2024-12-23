import { useState } from 'react';

export function useFormEditarFilme() {
  const [formInputs, setFormInputs] = useState({
    titulo: null,
    url_poster: null,
    descricao: null,
    categoria: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }
  return {
    mudanca: handleChange,
    dadosDosInputs: formInputs,
  };
}
