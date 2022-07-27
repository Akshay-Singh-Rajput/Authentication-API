import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    InputRightElement,
    Text
} from "@chakra-ui/react";

import { FaUserAlt, FaLock, FaUserTie } from "react-icons/fa";

const CFaUserTie = chakra(FaUserTie);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock); 

export default function Register() {
    // initial state
    let navigate = useNavigate();

    const [ showPassword, setShowPassword ] = useState(false);
    const [ formData, setFormData ] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    );

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleInputChange = (e) => { setFormData({ ...formData, [ e.target.id ]: e.target.value }); };

    const [ register, setRegister ] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
const {name, email, password} = formData
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/api/register",
            data: {
                name,
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
                console.log(result);
            })
            .catch((error) => {
                error = new Error();
                console.log(error)
            });
    };

    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="blue.100"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="blue.500" />
                    <Heading color="blue.400">Welcome</Heading>
                    <Box minW={ { base: "90%", md: "468px" } }>
                        <form>
                            <Stack
                                spacing={ 4 }
                                p="1rem"
                                boxShadow="md"
                                backgroundColor="whiteAlpha.900"

                            >
                                <FormControl>
                                    <Text fontSize='4xl' color="blue.500" align='left' m='2'>Sign Up</Text>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={ <CFaUserTie color="gray.300" /> }
                                        />
                                        <Input type="text" placeholder="Name" id="name" onChange={ handleInputChange } />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={ <CFaUserAlt color="gray.300" /> }
                                        />
                                        <Input type="email" id="email" placeholder="email address" onChange={ handleInputChange } />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                            children={ <CFaLock color="gray.300" /> }
                                        />
                                        <Input
                                            type={ showPassword ? "text" : "password" }
                                            placeholder="Password"
                                            id="password"
                                            onChange={ handleInputChange }
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={ handleShowClick }>
                                                { showPassword ? "Hide" : "Show" }
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    borderRadius={ 5 }
                                    type="submit"
                                    variant="solid"
                                    colorScheme="blue"
                                    width="full"
                                    onClick={ handleSubmit }
                                >
                                    Sign up
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    Have a account?{ " " }
                    <NavLink color="teal.500" to="/signin">
                        Login
                    </NavLink>
                  
                </Box>
            </Flex>
        </>
    );
}