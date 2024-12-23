import { RouterProvider } from 'react-router-dom';
import './App.css';
import { GlobalToastrProvider } from './context/toastr/toastr.context';
import { router } from './router';
import { Toastr } from './ui/components';

function App() {
  return (
    <GlobalToastrProvider>
      <RouterProvider router={router} />
      <Toastr />
    </GlobalToastrProvider>
  );
}

export default App;
