import { Container, Flex, Box } from '@chakra-ui/react';

import Feedposts from '../../componentes/FeedPosts/Feedposts';
import { SuggestedUsers } from '../../componentes/SuggestedUsers/SuggestedUsers';

const HomePage = () => {
  return (
    <Container maxW={'conatainer.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Feedposts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
