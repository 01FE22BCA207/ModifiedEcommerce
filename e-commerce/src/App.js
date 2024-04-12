import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/default';
import { Box } from '@mui/material'

//components
import Header from './components/header/Header';
import DetailView from './components/ItemDetails/Detailview';  
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/DataProvider';

import Cart from './components/Cart/Cart';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
               <Route path= '/cart' element={<Cart />} /> 
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;