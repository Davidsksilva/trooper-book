import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Comment = ({ data }) => {
  return (
    <Container>
      <img src={data.author.avatar} alt="avatar" />
      <Content>
        <strong>{data.author.name}:</strong> {data.content}
      </Content>
    </Container>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
