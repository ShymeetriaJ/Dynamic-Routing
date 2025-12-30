import { Link } from 'react-router-dom';
import MockBlogs from '../models/MockBlogs';

function BlogIndex() {
  return (
     <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>
      <p>Click on any post to read more.</p>

      <div style={{ marginTop: '20px' }}>
      {MockBlogs.map((post) => (
        <div key={post.id} style={{marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
            <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            </Link>
            <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default BlogIndex;