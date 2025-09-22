import pic from "./pic.jpeg"
import "./App.css"

function App(){
  return <div>
    <ProfileCard 
    name="Ash Dutta"
    age="24"
    location="Assam"
    followers="304"
    likes="40k"
    photos="32"
    />
  </div>
}

function ProfileCard({name, age, location, followers, likes, photos}){

  return <div>
    <div className="card">
      <div className="top-card"></div>
      
      <img className="profilePic" src={pic} />

      <div className="bottom-card">
        <h2 className="name">{name}<span className="age">{age}</span></h2>
        <p className="location">{location}</p>
        <hr />
        <div className="social">
          <div className="inside-social"><h2>{followers}</h2> <p>Followers</p></div>
          <div className="inside-social"><h2>{likes}</h2><p>Likes</p></div>
          <div className="inside-social"><h2>{photos}</h2><p>Photos</p></div>
        </div>
      </div>
    </div>
  </div>
}

export default App;