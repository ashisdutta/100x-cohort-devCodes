import React, { useState } from 'react';




function App(){

  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh", display:"flex", justifyContent:"center"}}>
      <ToggleMessage/>
      <div style={{marginTop:100 }}>
        <PostComponent
        name={"harkirat"}
        subtitle={"20 followers"}
        time={"2m ago"}
        image={"https://media.licdn.com/dms/image/v2/D4D03AQEg0YrGtxFTvA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698559589611?e=1758758400&v=beta&t=VOJ_cEd4MWGzonx2w_Gs8i1rDAP13-y5qka9GQV4TXk"}
        description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
        /><br />
        <PostComponent
        name={"Ashis"}
        subtitle={"Promoted"}
        //time={"3m ago"} // here we will apply conditional rendering
        image={"https://media.licdn.com/dms/image/v2/D560BAQH2XPEu-_xgrg/company-logo_100_100/company-logo_100_100/0/1688401344849/san_jose_state_university_logo?e=1758758400&v=beta&t=durDB7yL-ANwTZwwIVQe-y_3dVlQ6NmYlKAemxCrpuE"}
        description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed toget a"}
        /><br />
      </div>
    </div>
  )
}

const style = {width: 300, backgroundColor: "white", borderRadius:5, padding:10}
function PostComponent({name, subtitle, time, image, description}){
  return <div style={{}}>
    <div style={style}>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div>
      <img src={image} style={{
      height:35,
      width:35,
      borderRadius:20,
      marginRight:10,
      paddingTop:10
    }}/>
    </div>

    <div>
      <b>{name}</b>
      <div>{subtitle}</div>
      {time!==undefined? <div style={{ display:"flex"}}>
        <div>{time}</div>
        <div>
          <img src="data:image/jpeg;base64,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" style={{
            height:25,
            width:30,
            borderRadius:50
          }}/>
        </div>
      </div> : null}
    </div>
    </div>

    <div style={{paddingLeft:10, paddingBottom:10}}>
      {description}
    </div>
  </div>
  </div>
}


const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


 export default App

