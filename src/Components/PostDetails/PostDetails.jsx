import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    const {id, title, body} = post;
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>title: {title}</p>
            <p>body: <small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;