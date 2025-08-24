// propTypes = a mechanism that ensures the the passed value is of correct datatype.
//  age: PropsTypes.number


// defalultProps = default values form props in case they are not passed from the parent component
// name: Guest

import propTypes from "prop-types"

function Student(props){

    return (
        <div class="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>

        </div>
    )
}

Student.propTypes= {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

export default Student
