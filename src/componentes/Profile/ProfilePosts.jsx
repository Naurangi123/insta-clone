import { Box, Flex, Grid, Skeleton, Text, VStack } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';
import { useState, useEffect } from 'react';

const ProfilePosts = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4].map((_, idx) => (
          <VStack key={idx} alignItems={'flex-start'} gap={4}>
            <Skeleton w={'full'}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/img3.png" />
          <ProfilePost img="/img4.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir="column" textAlign={'center'} mx={'auto'} mt={10}>
      <Text fontSize={'2xl'}>No Posts Found🤔</Text>
    </Flex>
  );
};
