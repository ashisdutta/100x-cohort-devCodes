

function App() {


  return (
    <div style={{
      background: "#dfe6e9",
      height: "100vh",
      display:"flex",
      justifyContent:"center"}}>
      <div>
        <PostComponent></PostComponent><br />
        <PostComponent></PostComponent><br />
        <ProfileComponent></ProfileComponent>
      </div>
    </div>
  )
}

const style = {width:200, borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex", justifyContent: "center",  }

function PostComponent(){
  return <div style = {{
    width:250,
    height:150,
    backgroundColor: "white",
    borderRadius:10


    

  }}>
    <div style={style}>
  <div>
    <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
    width:30,
    height:30,
    borderRadius:20,
    marginRight:10
  }} />
  </div>

  <div>
    <b>100xdevs</b>
    <div>23,888 followes</div>
    <div>12m</div>
  </div>
</div>

<div style={{marginLeft:10}}>
  <p>what to know to win big? Ckeck out how these folks won $6000 in bounties.</p>
</div>

</div>

}

const profileDivStyle = {width:200, backgroundColor:"white", borderRadius:10, textAlign:"center",}
const pMargin = {margin:0, paddingBottom:"10px"}

function ProfileComponent(){
  
  return <div style={profileDivStyle}>
    <div>
      <img style={{borderRadius:"50%", height:50, width:50, marginTop:20, marginBottom:20}} src="https://media.licdn.com/dms/image/v2/D4D03AQEg0YrGtxFTvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698559589611?e=1758153600&v=beta&t=nJ_FuCCb0_xN7VwY1Y_x2a8lp0nCnQjB8ql3XfmHikY" /> <br />
      <b style={pMargin}>Ashis Dutta</b>
      <p style={pMargin}>working with WebRTC</p>
      <div style={{display:"flex", justifyContent:"space-between", padding:"0 10px 0 10px"}}>
        <p style={pMargin}>profile viewers</p>
        <p style={pMargin}>41,902</p>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", padding:"0 10px 0 10px"}}>
        <p style={pMargin}>Post impressions</p>
        <p style={pMargin}>1,313</p>
      </div>
    </div>
  </div>
}

export default App