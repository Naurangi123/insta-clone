import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SuggestedUser = ({ follower, name, avatar }) => {
  const [isFollowed, setFollowed] = useState(true);

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={11} color={'gray.500'}>
            {follower} Follower
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={12}
        bg={'transparent'}
        fontWeight={'medium'}
        color={'blue.500'}
        cursor={'pointer'}
        _hover={{ clor: 'white' }}
        onClick={() => setFollowed(!isFollowed)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
