import { Box, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../componentes/Sidebar/Sidebar';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* the page content on the left side */}
      {pathname !== '/auth' ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* the page content on the right side */}
      <Box flex={1} w={{ base: 'calc(100%-70px)', md: 'calc(100%-70px)' }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
