// axios vs fetch
const axios = require('axios');


async function main(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    });
    const data = await response.json();
    console.log(data);
}

main();

// axios

async function useAxios(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
}

useAxios();

