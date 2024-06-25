import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-direction: column;
min-height: 100vh;
box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const PostCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background: red;
  box-sizing: border-box;
`;

export const PostTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const PostBody = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
`;

export const PostAuthor = styled.div`
  font-size: 0.9em;
  color: #555;
`;
