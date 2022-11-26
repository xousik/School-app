import styled from 'styled-components';
import { ViewWrapper } from 'components/moleculs/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  align-items: center;
`;

export const GroupWrapper = styled(ViewWrapper)`
  margin: 0;
  margin-top: 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  nav a {
    margin-left: 15px;
    display: inline-block;
    text-align: center;
    background-color: white;
    border-radius: 50px;
    padding: 5px;
    width: 30px;
    height: 30px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
  }
  nav a:hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
