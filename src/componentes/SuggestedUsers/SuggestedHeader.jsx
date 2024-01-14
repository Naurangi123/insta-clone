import { Avatar, Text, Flex, Link, Button } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogOut';
import useAuthStore from '../../store/authStore';

const SuggestedHeader = () => {
  const { handlelogout, isloggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={'lg'} src={authUser.profilrURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={'bold'}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={'xs'}
        background={'transparent'}
        _hover={{ background: 'tranparent' }}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        style={{ textDecoration: 'none' }}
        isLoading={isloggingOut}
        cursor={'pointer'}
        onClick={handlelogout}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
