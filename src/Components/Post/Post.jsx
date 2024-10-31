import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handlePostDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='card'>
            <h4>post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Click Me</Link>
            <button onClick={handlePostDetails}>see details</button>
        </div>
    );
};

export default Post;