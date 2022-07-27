import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';

import { NavLink, useNavigate } from "react-router-dom";

export default function WithSubnavigation() {

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
                align={ 'center' }>
                <Flex
                    flex={ { base: 1, md: 'auto' } }
                    ml={ { base: -2 } }
                    display={ { base: 'flex', md: 'none' } }>

                </Flex>
                <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>
                    <Text
                        textAlign={ useBreakpointValue({ base: 'center', md: 'left' }) }
                        fontFamily={ 'heading' }
                        color={ useColorModeValue('gray.800', 'white') }
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
                        href={ '/signin' }>
                        Sign In
                    </Button>
                    <Button
                        display={ { base: 'none', md: 'inline-flex' } }
                        as={ 'a' }
                        fontSize={ 'sm' }
                        fontWeight={ 600 }
                        color={ 'white' }
                        bg={ 'blue.500' }
                        href={ '/signup' }
                        _hover={ {
                            bg: 'blue.400',
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
                    <Popover trigger={ 'hover' } placement={ 'bottom-start' }>
                        <PopoverTrigger>
                            <Link
                                p={ 2 }
                                href={ navItem.href ?? '/' }
                                fontSize={ 'sm' }
                                fontWeight={ 500 }
                                color={ linkColor }
                                _hover={ {
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                } }>
                                { navItem.label }
                            </Link>
                        </PopoverTrigger>


                    </Popover>
                </Box>
            )) }
        </Stack>
    );
};


                            {/* <NavLink to={'hello'}  ></NavLink> */}





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