import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    
    const {id, name, email, phone} = user;
    
    return (
        <div className='cardContainer'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;