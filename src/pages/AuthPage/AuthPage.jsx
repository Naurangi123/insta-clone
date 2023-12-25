
import React from 'react';
import { Box, Container, Flex, VStack,Image } from '@chakra-ui/react';
import AuthForm from '../../componentes/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={'center'} px={4}>
        <Container maxW={"container.md"} padding={0}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            {/* Left hand Side */}
          <Box display={{base:"none",md:"block"}}>
            <Image src="/auth.png" h={560} alt="Phone img"  />
          </Box>
          {/* Right hand sight */}
          <VStack spacing={"center"} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
          </Flex>
        </Container>
    </Flex>
  );
}

export default AuthPage;