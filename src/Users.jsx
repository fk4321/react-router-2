import { Link } from "react-router-dom"

const Users = (props) => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    props.userData.map((user) => {
                        return(
                            <li key={user.id}>
                                <Link to={`/users/${user.name}`}>
                                    {user.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users 