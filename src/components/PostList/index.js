import React, { Component } from 'react';
import styled from 'styled-components';

import Post from '../Post';

import fives from '../../assets/fives.png';
import rex from '../../assets/rex.png';
import gregor from '../../assets/gregor.png';

const Container = styled.div`
  box-sizing: border-box;
  padding: 12px;
  margin: 20px 162px;
`;

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Fives',
          avatar: fives,
        },
        date: '10 Jun 2019',
        content:
          ' Look around. We’re one and the same. Same heart, same blood.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Rex',
          avatar: rex,
        },
        date: '04 Jun 2019',
        content:
          ' We’re not programmed. You have to learn to make your own decisions.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Gregor',
          avatar: gregor,
        },
        date: '02 Jun 2019',
        content:
          'It was an honor to serve with you, Rex. It was an honor to fight with you for something that we chose to believe in.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Container>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </Container>
    );
  }
}
