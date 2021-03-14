import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
const Navbar: React.FunctionComponent<{}> = (props) => {
    
        const [{data,fetching}]= useMeQuery()
        const [{fetching:logoutFetching},logout]=useLogoutMutation()
   
        let body=null;
        if(fetching){

        }else if(!data?.me){
              body=(  <>
                  <NextLink href="/login">
                   <Link mr={2}>login</Link>
                   </NextLink>
                   <NextLink href="/register">
                    <Link>register   </Link>
                    </NextLink>
                </>)
        }else{
                body=<Flex>
                    <Box mr={4}>{data.me.username}</Box>
                    <Button isLoading={logoutFetching} onClick={()=>{
                        logout()
                    }} variant='link'>logout</Button>
                    </Flex>
        }
        return (
            <Flex p={4} bgColor="tomato">
                <Box ml='auto'>
                  {body}     
                </Box>
            </Flex>
           
        )
}
export default Navbar