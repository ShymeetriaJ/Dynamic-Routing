import { useParams, Link } from 'react-router-dom';
import posts from '../models/posts';

function BlogPost() {
  const { slug } = useParams();
  
  const post = posts.find((p) => p.slug === slug);

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/blog">Back to all posts</Link>
      <h1>{post.title}</h1>
      <div style={{ marginTop: '20px'}}>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;