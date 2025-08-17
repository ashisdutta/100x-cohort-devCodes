

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
        <PostComponent></PostComponent><br />
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


export default App