import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { Provider } from 'urql';


// const client = createClient({
//   url: 'http://localhost:4000/graphql',
//   exchanges: [dedupExchange, cacheExchange({

//     updates: {
//       Mutation: {
//         logout: (_result, args, cache, info) => {
//           betterpdateQuery<LoginMutation,MeQuery>(cache,
//             {query:MeDocument},
//             _result,
//             (result,query)=>({me:null})

//             )
//           },

//         login: (_result, args, cache, info) => {
//           // console.log("args",args)
//           // console.log("cache",cache)
//           // console.log("result",_result)
//           // console.log("info",info)
//           betterpdateQuery<LoginMutation,MeQuery>(cache,
//             {query:MeDocument},
//             _result,
//             (result,query)=>{
//                 if(result.login.errors){
//                   return query
//                 }else{
//                   return {
//                     me:result.login.user
//                   }
//                 }
//             }
//             )
//           },
//           register: (_result, args, cache, info) => {
//             betterpdateQuery<RegisterMutation,MeQuery>(cache,
//               {query:MeDocument},
//               _result,
//               (result,query)=>{
//                   if(result.register.errors){
//                     return query
//                   }else{
//                     return {
//                       me:result.register.user
//                     }
//                   }
//               }
//               )
//             }

//       },

//     }
//   }), fetchExchange],
//   fetchOptions:{
//     credentials:'include'
//   }
// });
function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider resetCSS theme={theme}>

      <Component {...pageProps} />
    </ChakraProvider>

  )
}

export default MyApp
