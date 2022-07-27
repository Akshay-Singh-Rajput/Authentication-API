import React, { useEffect, useState } from "react";
import axios from "axios";
import PrintComponent from "./Printable/PrintComponent";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function FreeComponent() {
    // set an initial state for the message we will receive after the API call
    const [ message, setMessage ] = useState("");

    // useEffect automatically executes once the page is fully loaded
    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
            method: "get",
            url: "https://nodejs-mongodb-auth-app.herokuapp.com/free-endpoint",
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // assign the message in our result to the message we initialized above
                setMessage(result.data.message);
            })
            .catch((error) => {
                error = new Error();
            });
    }, []);

    return (
        <React.Fragment>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="blue.100"
                justifyContent="center"
                alignItems="center">

                <Text fontSize='2xl' p='20px'>Free Component</Text>
                {/* displaying our message from our API call */ }
                <Text fontSize='3xl' color='red.400' mb='20px'>{ message }</Text>
                <PrintComponent />
            </Flex>
        </React.Fragment>
    );
}