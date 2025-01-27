import { useState, useEffect } from 'react';
import * as workoutService from '../../services/workoutService';
import './WorkoutListPage.css';
import PostItem from '../../components/PostItem/PostItem';

export default function WorkoutListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await workoutService.index();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  const postItems = posts.map((p) => <PostItem key={p._id} post={p} />);

  return (
    <>
      <h1>Workout List</h1>
      <section className="post-item-container">{postItems}</section>
    </>
  );
}
