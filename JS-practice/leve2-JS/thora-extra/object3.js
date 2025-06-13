// de-structure

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor;
//          or

//const {courseInstructor} = course;
//console.log(courseInstructor);


// give the name in short also
const {courseInstructor:instructor}= course;
console.log(instructor);




