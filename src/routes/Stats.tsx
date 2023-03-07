import {useFetcher, useLoaderData} from 'react-router-dom'



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
import {ChevronDownIcon} from "@chakra-ui/icons";
import {Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect, useState} from 'react';

export /*async*/ function loader(days: number) {
    /*
    fetch(BACKEND).then(res=>res.json());

     */
    if (Number.isNaN(days) || days === -1)
        days = 100;
    return tests[0].fields.map(field => {
        return {
            name: field.label,
            value: Math.floor(Math.random() * days) + 1
        }
    });
}


export default function Stats() {

    const bg = useColorModeValue('white', 'gray.700')
    const fetcher = useFetcher();
    const [menuText, setMenuText] = useState("Periodo");
    const [dias, setDias] = useState(100);


    function menuAction(days : number){
        if (days === -1)
            setMenuText("Todo");
        else
            setMenuText(`Ultimos ${days} dias`)
        setDias(days);
    }


    if(!fetcher.data && fetcher.state === "idle"){
        fetcher.load(`/estadisticas`);
    }
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
                            {menuText}
                        </MenuButton>
                        <fetcher.Form method="get" action={`/estadisticas/${dias}`}>
                            <MenuList>
                                <MenuItem type="submit" onClick={() => menuAction(7)}>Ultimos 7 dias</MenuItem>
                                <MenuItem type="submit" onClick={() => menuAction(15)}>Ultimos 15 dias</MenuItem>
                                <MenuItem type="submit" onClick={() => menuAction(30)}>Ultimos 30 dias</MenuItem>
                                <MenuItem type="submit" onClick={() => menuAction(90)}>Ultimos 90 dias</MenuItem>
                                <MenuItem type="submit" onClick={() => menuAction(-1)}>Todo</MenuItem>
                            </MenuList>
                        </fetcher.Form>
                    </Menu>
                </CardBody>
            </Card>
            {
                fetcher.data ?
                    fetcher.data.map((test: any) =>
                        {
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

        </SimpleGrid>
    )
}
