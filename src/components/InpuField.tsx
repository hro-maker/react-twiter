import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';
import React,{InputHTMLAttributes} from 'react';

type Wraperprops = InputHTMLAttributes<HTMLInputElement> & {
    label:string;
    name:string;
};
const InpuField: React.FunctionComponent<Wraperprops> = ({label,size:_,...props}) => {
    const [field,{error}]=useField(props);
        return (
            <FormControl isInvalid={!!error}>
                <FormLabel htmlFor={field.name}>{label}</FormLabel>
                <Input

                 {...field}  
                 {...props}
                 id={field.name} 
                //  placeholder={props.placeholder}
                  />
                {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
              </FormControl>
        )
}
export default InpuField