export default function PostItem({ post }) {
  return (
    <article>
      <h4>{new Date(post.day).toLocaleDateString()}</h4>
      <p>{post.type}</p>
      <h4>{post.user.name}</h4>
      <Link to={`/postItem/${post._id}`}>Details</Link>
    </article>
  );
}
