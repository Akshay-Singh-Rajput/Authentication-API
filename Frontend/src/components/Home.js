import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";


export default function Home() {
    return (
        <Box backgroundColor="blue.100" h='100vh' textAlign='center'>
            <Flex 
                flexDirection="column"
                width="100wh"
                height="80vh"
                backgroundColor="blue.100"
                justifyContent="center"
                alignItems="center"
                >
            <Text fontSize='2xl' p='20px'>Welcome to Auth Page</Text> 
            </Flex>
        </Box>


    );
}