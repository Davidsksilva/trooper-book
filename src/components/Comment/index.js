import React from 'react';
import styled from 'styled-components';

import rex from '../../assets/rex.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const Content = styled.div`
  background: #eeeeee;
  border-radius: 20px;
  padding: 10px;
  flex: 1;

  font-family: Open Sans;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */

  color: #3e3e3e;

  strong {
    font-weight: bold;
  }
`;

const Comment = () => {
  return (
    <Container>
      <img src={rex} alt="rex" />
      <Content>
        <strong>Rex:</strong> Copy that.
      </Content>
    </Container>
  );
};

export default Comment;
