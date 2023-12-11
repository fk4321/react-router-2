import { useParams, Link } from "react-router-dom";

const SinglePost = ((props) => {
    const params = useParams()
    const id = params.id*1 

    const post = props.postData.find((post) => {
        return post.id === id
    })

    if (!post) {
        return null
    }

    return (
        <div>
            <h1>{post.body}</h1>
            <Link to='/posts'>
                Back to all posts
            </Link>

        </div>
    )
})

export default SinglePost