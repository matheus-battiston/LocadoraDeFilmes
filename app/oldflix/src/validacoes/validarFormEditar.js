export function validarFormEditar(inputs) {
  if (
    inputs.titulo === null &&
    inputs.url_poster === null &&
    inputs.descricao === null &&
    inputs.categoria === null
  ) {
    return false;
  }

  return true;
}
