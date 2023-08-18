import { theme } from 'src/shared/config/theme';
import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/exo-2';
import React from 'react'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
