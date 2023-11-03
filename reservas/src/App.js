import React, {Fragment, useContext} from 'react'
import { PaginaInicio } from './components/PaginaInicio';
import { ApiProvider, ApiContext } from './context/ApiContext';


function App() {

    const [ auth, guardarAuth ] = useContext(ApiContext)
  return (
    <>
      <Fragment>
        <ApiProvider value={[auth, guardarAuth]}>
          <PaginaInicio />
        </ApiProvider>
      </Fragment>
    </>
    
  );
}

export default App;
