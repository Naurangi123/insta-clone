import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}
      my={2}
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} alt="user avatar pic" size={'sm'} />
        <Flex fontSize={'12px'} fontWeight={'bold'} gap={'2'}>
          {username}
          <Box color={'gray.500'}>. 1W</Box>
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Text
          fontSize={'blue.500'}
          color={'blue'}
          _hover={{ color: 'white' }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
