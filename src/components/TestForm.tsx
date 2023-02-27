import { Form } from 'react-router-dom'

import {
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    Button,
    VStack,
    InputGroup,
    InputRightAddon,
    Center,
    Box
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
    patient: string,
    width?: string
}

export default function TestForm({ test, patient, width }: TestFormProps) {
    const w = width ? width : '70%'

    return (
        <Box w={w}>
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
        </Box>
    )
}
