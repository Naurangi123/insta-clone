import {
  Container,
  Flex,
  Box,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { useState } from 'react';
import { useEffect } from 'react';

const Feedposts = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height="10px" w={'200px'} />
                <Skeleton height="10px" w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'400px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            img="/img1.png "
            username="naurangi lal"
            avatar="/img1.png"
          />
          <FeedPost img="/img2.png " username="Rajesh" avatar="/img2.png" />
          <FeedPost img="/img3.png " username="AnyOne" avatar="/img3.png" />
          <FeedPost img="/img4.png " username="Rahul" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default Feedposts;
