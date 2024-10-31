import { useLoaderData } from "react-router-dom";
import User from "../UserDetails/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>tumi khub vodro users hahaha..!</p>
            <div className="container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;