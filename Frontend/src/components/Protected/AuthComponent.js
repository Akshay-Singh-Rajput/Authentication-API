import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Flex, Text } from "@chakra-ui/react";
const cookies = new Cookies();


export default function AuthComponent() {
    // set an initial state for the message we will receive after the API call
    const [ message, setMessage ] = useState("");
    const [email, setEmail] = useState('')
    const GetToken = async () => {
        // get token generated on login
        const token = await cookies.get("TOKEN");
        // set configurations for the API call here
        const configuration = {
            method: "get",
            url: "http://localhost:8080/auth-endpoint",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        // make the API call
        await axios(configuration)
            .then((result) => {
                // assign the message in our result to the message we initialized above
                setMessage(result.data.message);
                setEmail(result.data.email)
            })
            .catch((error) => {
                error = new Error();
            });


    };

    // useEffect automatically executes once the page is fully loaded
    useEffect(() => {
        GetToken();
    }, []);

    // logout
    const logout = () => {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        // redirect user to the landing page
        window.location.href = "/";
    };

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="blue.100"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontSize='2xl'>Auth Component</Text>

            {/* displaying our message from our API call */ }
            <Text fontSize='3xl' color='red.400'>{email} {message} </Text>

            {/* logout */ }
            <Button type="submit" m='10' colorScheme="red" onClick={ () => logout() }>
                Logout
            </Button>
        </Flex>
    );
}