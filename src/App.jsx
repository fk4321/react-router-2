import { useState,useEffect } from 'react'
import './App.css'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import SingleUser from './SingleUser'
import SinglePost from './SinglePost'

function App() {
  const [userData, setUserData] = useState([])
  const [postData, setPostData] = useState([])
  
  const location = useLocation()
  const {pathname} = location

  //get data 
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      // console.log(users)
      const data = users.data
      // console.log(data)
      setUserData(data)
    }
    fetchUsers()
  },[])

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts")
      // console.log(posts)
      const data = posts.data
      setPostData(data)
    }
    fetchPost()
  },[])

  return (
    <div className='nav'>
      <nav className='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to="/users">Users({userData.length})</Link>
        <Link to="/posts">Posts({postData.length})</Link>
      </nav>  

      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/users' element={< Users userData={userData}/>}/>
        <Route path='/users/:id' element={< SingleUser userData={userData}/>}/>
        <Route path='/posts' element={< Posts postData={postData}/>}/>
        <Route path='/posts/:id' element={< SinglePost postData={postData}/>}/>
      </Routes> 
    </div>
  )
}
export default App
