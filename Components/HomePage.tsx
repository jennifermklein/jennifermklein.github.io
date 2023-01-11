import { Avatar, Slide, Flex, Heading, Text } from '@chakra-ui/react';
import SocialButtons from './SocialButtons';

const HomePage: React.FC = () => {
    return (
        <Slide in={true}>
        <Flex ml={{base: '10%', md: '10%'}} h={'65%'} p="4" gap='9' justifyContent={'flex-start'} alignItems={"center"}>
           <Flex maxW={'80%'} direction={'column'} gap='3'>
            <Flex align='center' gap="4">
           <Avatar
                size="lg"
                src={
                'https://media.licdn.com/dms/image/C5603AQEJhYSc5fP54w/profile-displayphoto-shrink_400_400/0/1605798627989?e=1678924800&v=beta&t=UvMpdQF7ilU3gbfuV1pD9iLsMvxDOPNN4iEDDgl5EIY'
                }
            />
            <Heading fontSize={"5xl"} whiteSpace="nowrap">Jenny Klein</Heading>
            </Flex>
            <Text fontSize={'xl'}>
                I&apos;m a software engineer and former lawyer living in Brooklyn, New York.</Text>
            <Flex gap="3"><Text fontSize='xl'>Get in touch:</Text>
            <SocialButtons/></Flex>
            </Flex>
        </Flex>
        </Slide>
    )
}

export default HomePage