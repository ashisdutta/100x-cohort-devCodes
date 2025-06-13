//1. Create a counter in Javascript (counts down from 30 to 0)


function count(num){
    if(num>=0){
        console.log(num);
        setTimeout(()=> count(num - 1), 1000);
    }
}

count(30);
