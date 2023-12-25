import { Flex, Text, Image } from '@chakra-ui/react';

const GoogleAuth = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
      <Image src="/google.png" w={6} alignItems={'center'} />
      <Text mx="2" color="blue" alignItems={'center'}>
        Log in with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
