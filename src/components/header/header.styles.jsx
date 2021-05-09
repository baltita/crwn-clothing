import styled from "styled-components";
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const Options = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;    
`;

export const OptionLink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
`;

export const UserEmail = styled.div`
  padding: 0px 15px;
`;