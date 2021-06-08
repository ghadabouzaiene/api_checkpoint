import React, {useState,useEffect} from 'react' ;
import axios from 'axios'
import './UserList.css'


/**base url to make requests */

function UserList() {
    /**useState hook */
    const [users, setUsers]=useState([])

    /**useEffect accepts arrow function */
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then( res =>{
               console.log(res)
               setUsers(res.data)
           })
           .catch(err=>{
               console.log(err)
           })
    })
    return (
        <div className="container" >
           
                {users.map(user=>(
                    <div className="user" >
               
                   <li  key={user.id} >  <img className="pic" src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png" style={{ height:"50px", width:"50px"}} alt ='profile'></img>
                   <div className="user-name">Name : {user.name}</div> 
                   <div className="user-username"> UserName : {user.username}</div> 
                  </li>
                  
                </div>))}
           
        </div>
    )
}

export default UserList
