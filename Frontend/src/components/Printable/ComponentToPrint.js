import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

// component to be printed
export const ComponentToPrint = React.forwardRef((props, ref) => {

    return (
        <TableContainer ref={ ref }>
            <Text fontSize='2xl' color='green'>Attendance</Text>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>S/N</Th>
                        <Th>Name</Th>
                        <Th >Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>Akshay Kumar</Td>
                        <Td >akshay@gmail.com</Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>Aakash Kumar</Td>
                        <Td>tech.aku@gmail.com</Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>Undefined</Td>
                        <Td >No Email</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );

});