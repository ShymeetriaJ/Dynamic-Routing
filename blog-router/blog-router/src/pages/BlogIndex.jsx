import { Link } from 'react-router-dom';
import posts from '../models/posts';

function BlogIndex() {
  return (
     <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>
      <p>Click on any post to read more.</p>

      <div style={{ marginTop: '20px' }}></div>
      {posts.map((post) => (
        <div key={post.id} style={{marginBottom: '20px'}}>
            <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default BlogIndex;