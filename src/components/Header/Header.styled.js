import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;

  flex: 1 1 auto;

  border-bottom: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.primaryLight};
`;

export const StyledHeaderLogoblock = styled.div`
  height: ${p => p.theme.space[7]}px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.secondary};

  @media (min-width: 768px) {
    height: ${p => p.theme.space[6]}px;
  }

  /* margin-bottom: ${p => p.theme.space[5]}px; */
`;

export const StyledHeaderTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[0]}px;

  background-color: white;

  font-size: ${p => p.theme.fontSizes.l};
`;

export const StyledTab = styled(NavLink)`
  width: 100%;
  height: 30px;
  transform-origin: 0 bottom 0;
  transform: scaleY(0.99);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primaryLight};

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-decoration: none;

  border-top: ${p => p.theme.borders.normal};
  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};

  border-top-left-radius: ${p => p.theme.radii.standart};
  border-top-right-radius: ${p => p.theme.radii.standart};

  border-color: ${p => p.theme.colors.primaryLight};

  transition: ${p => p.theme.transitions.standart};

  &.active {
    cursor: default;
    font-weight: ${p => p.theme.fontWeights.bold};
    transform: scaleY(1.05);

    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.secondary};

    border-top: ${p => p.theme.borders.bold};
    border-left: ${p => p.theme.borders.bold};
    border-right: ${p => p.theme.borders.bold};

    border-top-left-radius: ${p => p.theme.radii.standart};
    border-top-right-radius: ${p => p.theme.radii.standart};

    border-color: ${p => p.theme.colors.primaryLight};
  }
`;
