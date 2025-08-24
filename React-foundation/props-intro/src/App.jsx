// props = read only propraties that are share between components.
//  A parent component can send data to a child component.
//  <Component key=value/>

import Student from "./Student.jsx"


function App() {


  return(
    <div>
      <Student name="Ash" age={20} isStudent={true}/>
      <Student name="Avne" age={23} isStudent={false}/>
      <Student name="spresg" age={26} isStudent={true}/>
      <Student/>
    </div>
  )

}

export default App
