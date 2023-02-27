import React from 'react'

import { useLoaderData } from 'react-router-dom'

import TestForm from '../components/TestForm';

import tests from '../data/tests';

import {
    Heading,
    Center,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Box
} from '@chakra-ui/react'
import saveTestToPDF from '../utils/saveTestToPdf';

interface ActionLoaderProps {
    request?: any,
    params?: any
}

export async function loader({ params} : ActionLoaderProps) {
    const patient = params.patient;
    return patient;
}

export async function action({ request }: ActionLoaderProps) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { testName, patient, ...results } = data;
    saveTestToPDF(testName, patient, results, 'test.pdf');
    return null;
}

export default function LabTests() {
    const patient = useLoaderData() as string;

    return (
        <Box w='100%' shadow='none'>
            <Box m={2}>
                <Heading as='h6'>{patient}</Heading>
            </Box>
            <Tabs>
                <TabList>
                {
                    tests.map(test => (<Tab key={test.name}>{test.name}</Tab>))
                }
                </TabList>
                <TabPanels>
                {
                    tests.map(test => {
                        return (
                            <TabPanel key={test.name}>
                                <Center>
                                    <TestForm test={test} patient={patient} width='70%' />
                                </Center>
                            </TabPanel>
                    )})
                }
                </TabPanels>
            </Tabs>
        </Box>
    )
}
