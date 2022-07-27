import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
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
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Text,
    Link
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";


import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
    // initial state
    const [ formData, setFormData ] = useState({ email: "", password: "" });
    const [ showPassword, setShowPassword ] = useState(false);
    const [ login, setLogin ] = useState(false);

    const cookies = new Cookies();
    const navigate = useNavigate();

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleInputChange = (e) => { setFormData({ ...formData, [ e.target.id ]: e.target.value }); };


    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        if (!(formData.email || formData.password)) {
            alert("please fill all the details");
            return;
        }
        const { email, password } = formData;
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/api/login",
            data: {
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                // redirect user to the auth page
                // window.location.href = "/auth";
                navigate("/auth", { replace: true });
                setLogin(true);
                console.log(result);

            })
            .catch((error) => {
                error = new Error();
                console.log(error);

            });
    };

    return (
        <React.Fragment>

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
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <Text fontSize='4xl' color="blue.500" align='left' m='2'>Login</Text>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={ <CFaUserAlt color="gray.300" /> }
                                        />
                                        <Input type="email" placeholder="email address"
                                            id="email"
                                            onChange={ handleInputChange }
                                        />
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
                                    <FormHelperText textAlign="right">
                                        <Link>forgot password?</Link>
                                    </FormHelperText>
                                </FormControl>
                                <Button
                                    borderRadius={ 5 }
                                    type="submit"
                                    variant="solid"
                                    colorScheme="blue"
                                    width="full"
                                    onClick={ handleSubmit }
                                >
                                    Login
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
                <Box>
                    New to us?{ " " }
                    <NavLink color="red.500" to="/signup">
                        Sign Up
                    </NavLink>
                </Box>
            </Flex>
        </React.Fragment>
    );
}