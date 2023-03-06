import { Form } from 'react-router-dom'

import { Test } from '../data/tests'

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  InputGroup,
  InputRightAddon,
  Center,
  Box
} from '@chakra-ui/react'

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
          <Input type='text' defaultValue={test.name} name='testName' hidden />
          <Input type='text' defaultValue={patient} name='patient' hidden />
          {
            test.fields.map(entry => {
              const label = entry.label;
              const name = Test.LabelToName(label);

              return (
                <FormControl key={name} isRequired>
                  <FormLabel htmlFor={name}>{label}</FormLabel>
                  <InputGroup>
                    <Input type='number' name={name} onWheelCapture={e => e.currentTarget.blur()} step='any' pattern='[0-9]+([\.,][0-9]+)?' />
                    <InputRightAddon w='12%'>
                      <Center w='100%'>
                        {entry.units}
                      </Center>
                    </InputRightAddon>
                  </InputGroup>
                </FormControl>
              )
            })
          }

          <Button type='submit' size='lg' colorScheme='blue'>Generar PDF</Button>
        </VStack>
      </Form>
    </Box>
  )
}
