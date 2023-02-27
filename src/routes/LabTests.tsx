import React from 'react'

import { Form, redirect, useLoaderData } from 'react-router-dom'

import TestForm, { Test } from '../components/TestForm';

import {
    Card,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useColorModeValue,
    CardHeader,
    Heading,
    CardBody,
    Button,
    VStack,
    InputGroup,
    InputRightAddon,
    Center,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Box
} from '@chakra-ui/react'

export function action(params: any) {
    const request = params.request;
    console.log(request);
    return redirect('/');
}

const quimica: Test = {
    name: 'Quimica',
    fields: [
        {
            label: 'Urea',
            units: 'mg/dL'
        },
        {
            label: 'Creatina',
            units: 'mg/dL'
        },
        {
            label: 'Fosfatasa Alcalina',
            units: 'ui/L'
        },
        {
            label: 'GPT',
            units: 'ui/L'
        },
        {
            label: 'Proteinas',
            units: 'g/dL'
        },
        {
            label: 'Albúmina',
            units: 'g/dL'
        },
        {
            label: 'Fosforo',
            units: 'mg/dL'
        }
    ]
}

export default function LabTests() {
    const patient = useLoaderData() as string;

    // return (
    //     <Card bg={useColorModeValue('white', 'gray.800')} w='60%' shadow='lg'>
    //         <CardHeader>
    //             <Heading>{patient}</Heading>
    //         </CardHeader>
    //         <CardBody>
    //             <Tabs variant='enclosed'>
    //                 <TabList>
    //                     <Tab>Quimica</Tab>
    //                     <Tab>Two</Tab>
    //                 </TabList>
    //                 <TabPanels>
    //                     <TabPanel>
    //                         <TestForm test={quimica} patient={patient} />
    //                     </TabPanel>
    //                     <TabPanel>
    //                     <p>two!</p>
    //                     </TabPanel>
    //                 </TabPanels>
    //             </Tabs>
    //         </CardBody>
    //     </Card>
    // )

    return (
        <Box w='100%' shadow='none'>
            <Box m={2}>
                <Heading as='h6'>{patient}</Heading>
            </Box>
            <Tabs>
                <TabList>
                    <Tab>Quimica</Tab>
                    <Tab>Two</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Center>
                            <TestForm test={quimica} patient={patient} width='70%' />
                        </Center>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
