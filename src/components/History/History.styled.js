import styled from 'styled-components';

export const StyledHistory = styled.div`
  flex: 1 1 30%;

  height: 100%;
  box-shadow: ${p => p.theme.shadows.history};
  *::-webkit-scrollbar {
    width: 0px;
  }

  border-radius: ${p => p.theme.radii.standart};
  /* background-color: aqua; */
  overflow: hidden;
  /* border: solid 3px; */

  @media screen and (min-width: 1200px) {
    flex: 1 1 20%;
  }
`;
