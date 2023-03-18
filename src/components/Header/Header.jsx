import { Box } from 'components/common/Box';
import Container from 'components/common/Container';
import React from 'react';
import {
  StyledHeader,
  StyledHeaderLogoblock,
  StyledHeaderNav,
  StyledHeaderTabs,
  StyledTab,
} from './Header.styled';
import { ReactComponent as LogoIcon } from '../../img/bs-logo-02.svg';
import { useCustomQueries } from 'hooks';

const Header = () => {
  const { mobile } = useCustomQueries();

  return (
    <StyledHeader>
      <StyledHeaderNav>
        <Box bg="brandColor" mb={4}>
          <Container>
            <StyledHeaderLogoblock>
              <LogoIcon width={mobile ? 200 : 100} />
            </StyledHeaderLogoblock>
          </Container>
        </Box>
        <Container>
          <StyledHeaderTabs>
            <StyledTab to="/">About</StyledTab>
            <StyledTab to="/check">Перевірити ТТН</StyledTab>
            <StyledTab to="/post-office">Список відділень</StyledTab>
          </StyledHeaderTabs>
        </Container>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
