import { Box } from '@chakra-ui/layout';
import React from 'react';

interface Wraperprops {
    variant: 'small' | 'regular'
}
const Wraper: React.FunctionComponent<Wraperprops> = ({children,variant='regular'}) => {

    return (
        <Box mt={8} marginX="auto" maxW={variant === 'regular'? "800px" :"400px"} w="100%">
            {children}
        </Box>
    )
}
export default Wraper
