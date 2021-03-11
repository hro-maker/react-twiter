import React from 'react';
import {Form, Formik} from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import Wraper from '../components/Wrapers';
import InputField from '../components/InpuField'
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
interface registerProps{

}

const Register: React.FunctionComponent<registerProps> = (props) => {
  return (
    <Wraper variant="small">
   <Formik
   initialValues={{username:"",password:""}}
   onSubmit={(values)=>{
      console.log(values)
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

export default Register;
