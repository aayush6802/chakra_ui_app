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
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'upperCase',
    p: '4',
    size: '4xl'
};

const Home = () => {

    

    return (
        <Box>
            <Carousel
                autoPlay
                infiniteLoop
                interval={1000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <Box w='full' h={'100vh'}>
                    <Image h={'full'} w={'full'} src={img1} objectFit={'cover'} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Watch The Future</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
                    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                        Future is Gaming</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
                    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Gaming on Console</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
                    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Nightlife is cool</Heading>
                </Box>
            </Carousel>

            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m={'auto'}
                >
                    Services
                </Heading>
                <Stack
                    h='full'
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'justify'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis ipsum ad iste inventore voluptate eius perspiciatis, consectetur, necessitatibus enim velit tempore itaque, recusandae labore repudiandae quia et. Necessitatibus officiis esse voluptatem assumenda corporis impedit tempora! Eaque, obcaecati! Accusamus error a similique odit perferendis doloremque saepe eveniet consectetur porro molestias.
                    </Text>
                </Stack>

            </Container>
        </Box>
    )
}

export default Home