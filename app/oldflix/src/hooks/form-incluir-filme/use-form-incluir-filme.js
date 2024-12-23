import { useState } from 'react';

export function useDadosFilme() {
  const [formInputs, setFormInputs] = useState({
    titulo: '',
    url_poster: '',
    descricao: '',
    categoria: '',
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
