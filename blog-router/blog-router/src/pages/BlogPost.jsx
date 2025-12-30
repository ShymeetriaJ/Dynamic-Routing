import { useParams, Link } from 'react-router-dom';
import posts from '../models/MockBlogs';

function BlogPost() {
  const { slug } = useParams();
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{padding: '20px'}}>
        <h1>Post not found.</h1>
        <link to="/blog">Back to Blog</link>
      </div>
    );
  }

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