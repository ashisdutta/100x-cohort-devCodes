

const currentDate = new Date();
console.log("current Date:", currentDate);
console.log("Date: ", currentDate.getDate());
console.log("Month:", currentDate.getMonth());
console.log("Year:", currentDate.getFullYear());

console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());



currentDate.setFullYear(2050);
console.log("After set full year: ", currentDate);

console.log("Time in milliseconds since 1970:", currentDate.getTime());
