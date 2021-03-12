import React from 'react';
import {Form, Formik} from 'formik'
import Wraper from '../components/Wrapers';
import InputField from '../components/InpuField'
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useMutation } from 'urql';
import { useLoginMutation, useRegisterMutation } from '../generated/graphql';
import { toErrormap } from '../utils/toErrormap';
import { useRouter } from "next/router";


const Login: React.FunctionComponent<{}> = (props) => {
 const [,login]= useLoginMutation()
 const router=useRouter()
  return (
    <Wraper variant="small">
   <Formik
   initialValues={{username:"",password:""}}
   onSubmit={async(values,{setErrors})=>{
     const response=await login({options:values})
     if(response.data?.login.errors){
            setErrors(toErrormap(response.data.login.errors))
     }else if(response.data?.login.user){
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
         <Button mt={4} isLoading={isSubmitting} style={{backgroundColor:'black',color:'white'}} type='submit'>login</Button>
            </Form>
     )}
   </Formik>
   </Wraper>
  )
};

export default Login;
