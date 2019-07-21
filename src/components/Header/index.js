import React from 'react';
import styled from 'styled-components';

import { FaUserCircle } from 'react-icons/fa';

import logo from '../../assets/trooperbook.png';
import helmet from '../../assets/helmet_i.png';

const Container = styled.div`
  height: 74px;
  width: 100%;
  background-color: #000;
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

  color: #ffffff;

  svg {
    margin-left: 10px;
    height: 24px;
    width: 24px;
  }
`;

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" width={120} height={24} />

      <ProfileSection>
        My Profile
        <FaUserCircle />
      </ProfileSection>
    </Container>
  );
};

export default Header;
