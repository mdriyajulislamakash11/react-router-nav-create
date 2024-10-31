
import { useLoaderData } from 'react-router-dom';

const UserToDetails = () => {
    const user = useLoaderData();
    const {name, email, phone} = user;
    
    return (
        <div>
            <h2>User: {name}</h2>
            <p>Email: {email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserToDetails;