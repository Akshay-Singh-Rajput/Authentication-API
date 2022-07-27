import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";


export default function Home() {
    return (
        <Box>
            <Flex 
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="blue.100"
                justifyContent="center"
                alignItems="center"
                >
            <Text fontSize='6xl'>Welcome to Auth Page</Text> 
            </Flex>
        </Box>


    );
}