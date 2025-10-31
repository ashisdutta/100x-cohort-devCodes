type Employee = {
    name:string,
    startDate: Date
}

interface Manager {
    name: string,
    department:string
}

type TeamLead = Employee & Manager;

const teamLeadA:TeamLead = {
    name: "Ash",
    startDate:new Date(),
    department: "devops"
}

function Greet(person:TeamLead){
    console.log(`${person.name} Wellcome to the new office. your depertment will be ${person.department}`)
}

Greet(teamLeadA);