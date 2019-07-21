import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import clone from '../../assets/clone.png';

import Comment from '../Comment';

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.133916);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const HeaderDetail = styled.div`
  margin-left: 10px;
  h1 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;

    color: #4a4a4a;
  }

  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;

    color: #9a9a9a;
  }
`;

const PostContent = styled.div`
  margin-top: 13px;
  margin-bottom: 22px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;

  color: #3e3e3e;
`;

const CommentSection = styled.div`
  border-top: 1px solid #eee;
  width: 100%;
`;

const Post = ({ data }) => {
  return (
    <Container>
      <Header>
        <img src={data.author.avatar} alt="avatar" />
        <HeaderDetail>
          <h1> {data.author.name} </h1>
          <p>{data.date}</p>
        </HeaderDetail>
      </Header>
      <PostContent>{data.content}</PostContent>

      <CommentSection>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </CommentSection>
    </Container>
  );
};

Post.defaultProps = {
  data: {
    author: {
      avatar: clone,
      name: 'A Clone Trooper',
    },
    date: '',
    content: 'Reporting for duty.',
    comments: [],
  },
};

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.array,
  }),
};

export default Post;
