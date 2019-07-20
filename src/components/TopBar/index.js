import React from 'react';
import styled from 'styled-components';

import {FaUserCircle} from 'react-icons/fa'

import Logo from '../../assets/logo.svg';

const Container= styled.div`
  height: 74px;
  width: 100%;
  background-color: #4A90E2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 42px;
`;

const ProfileSection = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;

  color: #FFFFFF;


  svg {
      margin-left: 10px;
      height: 24px;
      width: 24px;
    }
`;




const TopBar = () => {
  return (
    <Container>
      <Logo width={120} height={24}/>
      <ProfileSection>
        My Profile
        <FaUserCircle/>
      </ProfileSection>
    </Container>
    );
}

export default TopBar;