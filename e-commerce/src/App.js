
//Components of MUI -> material UI
import Header from './components/header/Header';         //    ./ -> same folder and ../ to move come out of folder
import Home from './components/home/Home';

import { BrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material'

function App() {
  return (
    <div className="App">
      {/* <DataProvider> */}
        {/* <BrowserRouter> */}
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Home />
          </Box>
          {/* <BrowserRouter> */}
          {/* </DataProvider> */}
        </div>
        );
}

        export default App;
