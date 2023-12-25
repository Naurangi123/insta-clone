import { Avatar, Text, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import useLogout from '../../hooks/useLogOut';
import useAuthStore from '../../store/authStore';

const SuggestedHeader = () => {
  const logoutUser = useAuthStore((state) => state.logout);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="as a programmer" size={'lg'} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={'bold'}>
          asaprogrammer
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        style={{ textDecoration: 'none' }}
        cursor={'pointer'}
        onClick={logoutUser}
      >
        Logout
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
