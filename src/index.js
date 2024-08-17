
import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';

function Userdemo(){
  const[posts,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>{setUsers(data)
          setLoading(false);
        })
        
      .catch(error=>{
        console.error("if it is not loading, will be error message");
        setLoading(false)
      })
  },[])
  if(loading){
    return <p>Loading</p>;
  }
  return (
    <div>
      <ul>
      <h1>List out the users in API</h1>
        {posts.map(post=>(
          <li key={post.id}>Id:{post.id}<br/>Title:{post.title}<br/>Body:{post.body}</li>         
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Userdemo/>,document.getElementById('root'));

