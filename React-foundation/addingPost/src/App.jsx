import { PostComponent } from "./post"
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
const postComponents = posts.map(post => <PostComponent
  name = {post.name}
  subtitle = {post.subtitle}
  time = {post.time}
  image = {post.image}
  description = {post.description}/>
)




  function addPost(){
    setPosts([...posts, {name:"harkirat",
        subtitle:"20 followers",
        time:"2m ago",
        image:"https://media.licdn.com/dms/image/v2/D4D03AQEg0YrGtxFTvA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698559589611?e=1758758400&v=beta&t=VOJ_cEd4MWGzonx2w_Gs8i1rDAP13-y5qka9GQV4TXk",
        description:"What to know how to win big? Check out how these folks won $6000 in bounties."}])
  }
  
  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh" }}>
      <button onClick={addPost}>Add post</button>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{marginTop:100 }}>
        {postComponents}
        
        <br />
      </div>
    </div>
    </div>
)}

export default App