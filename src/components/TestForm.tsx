import { Form } from 'react-router-dom'

import {
    Card,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    CardHeader,
    Heading,
    CardBody,
    Button,
    VStack,
    InputGroup,
    InputRightAddon,
    Center
} from '@chakra-ui/react'


export interface TestField {
    label: string,
    units: string
}

export type Test = {
    name: string,
    fields: TestField[]
}

export interface TestFormProps {
    test: Test,
    patient: string
}

export default function TestForm({ test, patient}: TestFormProps) {
    return (
        <Card bg={useColorModeValue('white', 'gray.800')} w='60%' shadow='lg'>
            <CardHeader>
                <Heading>{patient} - {test.name}</Heading>
            </CardHeader>
            <CardBody>
                <Form method='post'>
                    <VStack spacing={5}>
                    {
                        test.fields.map(entry => {
                            const label = entry.label;
                            const nameSplit = label.toLowerCase().split(' ');
                            const name = nameSplit.join('-');

                            return (
                                <FormControl key={name}>
                                    <FormLabel htmlFor={name}>{label}</FormLabel>
                                    <InputGroup>
                                        <Input type='number' name={name} />
                                        <InputRightAddon w='12%'>
                                            <Center w='100%'>
                                                { entry.units }
                                            </Center>
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            )
                        })
                    }

                        <Button type='submit' size='lg' colorScheme='blue'>Listo</Button>
                    </VStack>
                </Form>
            </CardBody>
        </Card>
    )
}
