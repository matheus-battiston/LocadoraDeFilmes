import {
  TelaPrincipal,
  TelaAdicionarFilme,
  TelaRemoverFilme,
  TelaEditarFilme,
} from '../ui/screen';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TelaPrincipal />,
  },
  {
    path: '/adicionar',
    element: <TelaAdicionarFilme />,
  },
  {
    path: '/remover',
    element: <TelaRemoverFilme />,
  },
  {
    path: '/editar/:id',
    element: <TelaEditarFilme />,
  },
]);
