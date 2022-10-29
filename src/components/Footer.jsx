import React from 'react'
import {
    Box,
    Image,
    Heading,
    Container,
    Stack,
    Text,
    VStack,
    HStack,
    Button,
    Input
} from '@chakra-ui/react'; 
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}
        >
            <Stack direction={['column', 'row']}>
                <VStack
                    alignItems={'stretch'}
                    w={'full'}
                    px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        Subscribe to get updates
                    </Heading>
                    <HStack
                        borderBottom={'2px solid white'}
                        py={'2'}>
                        <Input placeholder='Enter Email here ...' border={"none"}
                            borderRadius={'none'}
                            outline={'none'}
                            focusBorderColor={'none'}
                        ></Input>
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'} >
                        VIDEO HUB
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>

                <VStack w={'full'} >
                    <Heading textTransform={'uppercase'} size={'md'}>
                        VIDEO HUB
                    </Heading>

                    <HStack>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a href="https://www.youtube.com/" target={'blank'}>
                                <AiFillYoutube size={'20'} />
                            </a>
                        </Button>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a href="https://www.instagram.com/" target={'blank'}>
                                <AiFillInstagram size={'20'} />
                            </a>
                        </Button>
                        <Button variant={'link'} colorScheme={'purple'}>
                            <a href="https://www.github.com/" target={'blank'}>
                                <AiFillGithub size={'20'} />
                            </a>
                        </Button>
                    </HStack>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer