import { useParams, Link } from "react-router-dom";

const SingleUser = ((props) => {
    const params = useParams()
    const id = params.id*1 

    const user = props.userData.find((user) => {
        return user.id === id
    })

    if (!user) {
        return null
    }

    return (
        <div>
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
            <Link to='/users'>
                Back to all users
            </Link>

        </div>
    )
})

export default SingleUser