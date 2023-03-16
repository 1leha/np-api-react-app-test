import styled from 'styled-components';

export const StyledPostOfficeDetalesWrapper = styled.div`
  display: flex;
  flex-direction: ${p => (p.tablet ? 'row' : 'column')};
  justify-content: space-between;
  /* width: 100%; */
  gap: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.primary};
  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledDetales = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;

  padding: ${p => p.theme.space[4]}px;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledNumberStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[4]}px;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledPostOfficeNumber = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledPostOfficeStatus = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.officeOpen};
`;

export const StyledOfficeDescriptionWrapper = styled.div`
  flex: 1 1 auto;

  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StyledCityType = styled.span`
  color: ${p => p.theme.colors.primaryAccent};
`;

export const StyledMaxWeight = styled.span`
  color: ${p => p.theme.colors.primaryAccent};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledOfficePhone = styled.span`
  color: ${p => p.theme.colors.primaryAccent};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledWorkHoursWrapper = styled.div`
  flex: 0 0 25%;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledWorkHoursList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  /* width: 100%; */
  gap: ${p => p.theme.space[3]}px;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledWorkHoursItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  /* width: 100%; */
  gap: ${p => p.theme.space[0]}px;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledWeekDay = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.primaryAccent};

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;

export const StyledWorkTime = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.primary};

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;
