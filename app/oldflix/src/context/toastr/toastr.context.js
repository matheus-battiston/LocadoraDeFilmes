import createGlobalState from 'react-create-global-state';

const initialState = null;

const [useGlobalToastr, Provider] = createGlobalState(initialState);

export const GlobalToastrProvider = Provider;

export default useGlobalToastr;
