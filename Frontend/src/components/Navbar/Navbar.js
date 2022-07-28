import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';

import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
const navigate = useNavigate()
    return (
        <Box>
            <Flex
                bg={ useColorModeValue('white', 'gray.800') }
                color={ useColorModeValue('gray.600', 'white') }
                minH={ '60px' }
                py={ { base: 2 } }
                px={ { base: 4 } }
                borderBottom={ 1 }
                borderStyle={ 'solid' }
                borderColor={ useColorModeValue('gray.200', 'gray.900') }
                align={ 'center' }


            >
                <Flex
                    flex={ { base: 1, md: 'auto' } }
                    ml={ { base: -2 } }
                    display={ { base: 'flex', md: 'none' } }>

                </Flex>
                <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>
                    <Text
                        textAlign={ useBreakpointValue({ base: 'center', md: 'left' }) }
                        fontFamily={ 'sans-serif' }
                        color={ useColorModeValue('gray.800', 'white') }
                        fontSize='2xl'
                    >
                        Logo
                    </Text>

                    <Flex display={ { base: 'none', md: 'flex' } } ml={ 10 }>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={ { base: 1, md: 0 } }
                    justify={ 'flex-end' }
                    direction={ 'row' }
                    spacing={ 6 }>
                    <Button
                        as={ 'a' }
                        fontSize={ 'sm' }
                        fontWeight={ 400 }
                        variant={ 'link' }
                        onClick={() => navigate('/signin')}
                        _hover={ {
                            cursor: 'pointer'
                        } }
                        >
                        Sign In
                    </Button>
                    <Button
                        display={ { base: 'none', md: 'inline-flex' } }
                        as={ 'a' }
                        fontSize={ 'sm' }
                        fontWeight={ 600 }
                        color={ 'white' }
                        bg={ 'blue.500' }
                        onClick={ () => navigate('/signup') }
                        _hover={ {
                            bg: 'blue.400',
                            cursor: 'pointer'
                        } }>
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction={ 'row' } spacing={ 4 }>
            { NAV_ITEMS.map((navItem) => (
                <Box key={ navItem.label }>
                    <NavLink
                        to={ navItem.href }>
                        <Text p={ 2 }
                            fontSize={ 'sm' }
                            fontWeight={ 500 }
                            color={ linkColor }
                            _hover={ {
                                color: linkHoverColor,
                            } }
                        >{ navItem.label }</Text>
                    </NavLink>
                </Box>
            )) }

        </Stack>
    );
};





const NAV_ITEMS = [
    {
        label: 'Home',
        href: "/"
    },
    {
        label: 'Free Component',
        href: '/free',

    },
    {
        label: 'Auth Component',
        href: '/auth',
    },

];