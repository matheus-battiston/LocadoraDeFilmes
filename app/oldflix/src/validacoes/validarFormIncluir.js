export function validarFormIncluir(inputs) {
  if (inputs.titulo === '') {
    return false;
  }

  if (inputs.url === '') {
    return false;
  }

  if (inputs.descricao === '') {
    return false;
  }

  if (inputs.categoria === '') {
    return false;
  }

  return true;
}
