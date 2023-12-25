import { Box, VStack, Image, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Login from './login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={10}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={20} cursor={'pointer'} alt="Instagram" />

          {!isLogin ? <Login /> : <Signup />}

          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            my={4}
            gap={1}
            w={'full'}
          >
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={4}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={3} fontSize={14}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={'blue.500'}
            cursor={'pointer'}
          >
            {isLogin ? 'Sign Up' : 'Log in'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
