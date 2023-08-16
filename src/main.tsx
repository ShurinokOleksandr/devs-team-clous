import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import React from 'react'

import {theme} from "./shared/config/theme";
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
