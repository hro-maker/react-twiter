import React from 'react';
import {Form, Formik} from 'formik'
import Wraper from '../components/Wrapers';
import InputField from '../components/InpuField'
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrormap } from '../utils/toErrormap';
import { useRouter } from "next/router";
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
interface registerProps{

}

const Register: React.FunctionComponent<registerProps> = (props) => {
 const [,register]= useRegisterMutation()
 const router=useRouter()
  return (
    <Wraper variant="small">
   <Formik
   initialValues={{username:"",password:""}}
   onSubmit={async(values,{setErrors})=>{
     const response=await register(values)
     if(response.data?.register.errors){
            setErrors(toErrormap(response.data.register.errors))
     }else if(response.data?.register.user){
            router.push('/')
     }
   }}
   >
     {({isSubmitting})=>(
       <Form>
         <InputField label="username" name="username"placeholder="Username"/>
         <Box mt='20px'>
         <InputField type='password' label="password" name="password"placeholder="password"/>
         </Box>
         <Button mt={4} isLoading={isSubmitting} style={{backgroundColor:'black',color:'white'}} type='submit'>register</Button>
            </Form>
     )}
   </Formik>
   </Wraper>
  )
};

export default withUrqlClient(createUrqlClient)(Register) ;
