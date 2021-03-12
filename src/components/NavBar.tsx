import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
const Navbar: React.FunctionComponent<{}> = (props) => {
        const [{data,fetching}]= useMeQuery()
        let body;
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
                    <Button variant='link'>logout</Button>
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