import React, { useEffect, useState } from 'react';
import { Container, Title, PostsGrid, PostCard, PostTitle, PostBody, PostAuthor } from '../styles/styles';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<{ [key: number]: User }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts.slice(0, 10));
    };

    const fetchUser = async (userId: number) => {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const user = await response.json();
      setUsers(prevUsers => ({ ...prevUsers, [userId]: user }));
    };

    fetchPosts();

    
    posts.forEach(post => {
      if (!users[post.userId]) {
        fetchUser(post.userId);
      }
    });
  }, [posts, users]);

  return (
    <Container>
      <Title>Posts</Title>
      <PostsGrid>
        {posts.map(post => (
          <PostCard key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            {users[post.userId] && (
              <PostAuthor>
                {users[post.userId].firstName} {users[post.userId].lastName}
              </PostAuthor>
            )}
          </PostCard>
        ))}
      </PostsGrid>
    </Container>
  );
};

export default App;
