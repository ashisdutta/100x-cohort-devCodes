
import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;




























// function App(){

//   return <div style={{ display:"flex", background:"gray"}}>
//     <Card>
//       <div>
//         what do you wanna post? <br />
//         <input type="text"/>
//       </div>
      
//     </Card>

//     <Card>
//       <div>
//         hello Everyone!
//       </div>
//     </Card>
//   </div>
// }


// function Card({children}){
//   return <div style={{backgroundColor:"white", borderRadius:5, color:"black", padding:20, margin:10}}>
//     {children}
//   </div>
// }


// export default App;