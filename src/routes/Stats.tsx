import { useFetcher } from 'react-router-dom'



import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Flex,
    SimpleGrid,
    Text, useColorModeValue, MenuList, Button, MenuButton, MenuItem, Menu
} from '@chakra-ui/react'

import tests from "../data/tests";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ReactNode, useEffect, useState } from 'react';

export async function loader({ params }: any) {
    /*
    fetch(BACKEND).then(res=>res.json());

     */
    var days = Number(params.days);
    if (Number.isNaN(days) || days === -1)
        days = 100;
    const stats = tests[0].fields.map(field => {
        return {
            name: field.label,
            value: Math.floor(Math.random() * days) + 1
        }
    });

    return { stats: stats, days: days }
}


function FormButton({ fetcher, action, children }: { fetcher: any, action: string, children: ReactNode }) {
    return (
        <fetcher.Form method='get' action={action}>
            <MenuItem type='submit'>{children}</MenuItem>
        </fetcher.Form>
    );
}


export default function Stats() {

    const bg = useColorModeValue('white', 'gray.700')
    const fetcher = useFetcher();

    useEffect(() => {
        if (!fetcher.data && fetcher.state === 'idle') {
            fetcher.submit({ method: 'get', action: '/estadisticas' });
        }
    }, [fetcher]);

    return (

        <SimpleGrid w='100%' h='100vh' p='5' columns={1} spacing={5}>
            <Card key={"period_chooser"}>
                <CardHeader>
                    <Heading>
                        Elegir Periodo
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {
                                fetcher.data ?
                                    fetcher.data.days === 100 ? 'Todo' : `Ultimos ${fetcher.data.days} dias`
                                    : 'Periodo'
                            }

                        </MenuButton>
                        <MenuList>
                            <FormButton action={'/estadisticas/7'} fetcher={fetcher}>Ultimos 7 dias</FormButton>
                            <FormButton action={'/estadisticas/15'} fetcher={fetcher}>Ultimos 15 dias</FormButton>
                            <FormButton action={'/estadisticas/30'} fetcher={fetcher}>Ultimos 30 dias</FormButton>
                            <FormButton action={'/estadisticas/90'} fetcher={fetcher}>Ultimos 90 dias</FormButton>
                            <FormButton action={'/estadisticas'} fetcher={fetcher}>Todo</FormButton>
                        </MenuList>
                    </Menu>
                </CardBody>
            </Card>
            {
                fetcher.data ?
                    fetcher.data.stats.map((test: any) => {
                        return (
                            <Card key={test.name} bg={bg} shadow='sm'>
                                <CardHeader>
                                    <Heading>{test.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Flex align='center' justify='space-between'>
                                        <Text>
                                            Cantidad: {test.value}
                                        </Text>
                                    </Flex>
                                </CardBody>
                            </Card>
                        )
                    }
                    )
                    : <Text> Loading... </Text>
            }

        </SimpleGrid >
    )
}
