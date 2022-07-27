import React, { useEffect, useState } from "react";
import axios from "axios";
import PrintComponent from "../Printable/PrintComponent";
import{ Flex, Text } from "@chakra-ui/react";

export default function FreeComponent() {
    //  initial state for the message we will receive after the API call
    const [ message, setMessage ] = useState("");

    // useEffect automatically executes once the page is fully loaded
    useEffect(() => {
        // setting configurations for the API call here
        const configuration = {
            method: "get",
            url: "http://localhost:8080/free-endpoint",
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

                <Text fontSize='3xl'>Free Component</Text>
                {/* displaying our message from our API call */ }
                <Text fontSize='4xl' color='red.400' mb='20px'>{ message }</Text>
                <PrintComponent />
            </Flex>
        </React.Fragment>
    );
}