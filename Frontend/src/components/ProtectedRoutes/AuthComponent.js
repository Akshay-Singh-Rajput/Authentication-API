import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Alert, AlertIcon, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();


export default function AuthComponent() {
    const navigate = useNavigate()
    // set an initial state for the message we will receive after the API call
    const [ message, setMessage ] = useState("");
    const [email, setEmail] = useState('');

    // Alert
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ alertType, setAlertType ] = useState("");
    
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
               let newError =  error.response.data.error;
                if (newError === 'Invalid request!'){
                    setAlertType("error");
                    setAlertMessage("Session Expired, Logging out...");
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 4000);
                    setTimeout(() => logout(), 4200);

                    return;
                    
                }
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
        navigate("/", { replace: true });
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
            <Text fontSize='3xl'>Auth Component</Text>

            {/* displaying our message from our API call */ }
            <Text fontSize='4xl' color='red.400' m='10px'>{email} {message} </Text>
            { showAlert && (
                <Alert status={ alertType } w='30%' mb='20px'>
                    <AlertIcon />
                    { alertMessage }
                </Alert>
            ) }
            {/* logout */ }
            <Button type="submit" colorScheme="red" m='10px' onClick={ () => logout() }>
                Logout
            </Button>
        </Flex>
    );
}