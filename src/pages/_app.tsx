import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

import theme from '../theme' 
import {Provider, createClient,dedupExchange, fetchExchange  } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange],
  fetchOptions:{
    credentials:'include'
  }
});
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
    <ChakraProvider resetCSS theme={theme}>
     
        <Component {...pageProps} />
    </ChakraProvider>
    </Provider> 
  )
}

export default MyApp
